import Vue from 'vue';
import Vuex from 'vuex';
//import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
const uuidv4 = require('uuid/v4');

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState({ key: 'trello-clone' })],
    state: {
        projects: [],
    },
    getters: {
        projects(state) {
            return state.projects;
        },
    },
    mutations: {
        addProject(state, project) {
            state.projects.push(project);
        },
        addList(state, payload) {
            let projectIndex = payload.projectIndex;
            let list = payload.list;
            state.projects[projectIndex].lists.push({
                name: list,
                id: uuidv4(),
                items: []
            });
        },
        addItem(state, payload) {
            let projectIndex = payload.projectIndex;
            let listIndex = payload.listIndex;
            let item = payload.item;
            state.projects[projectIndex].lists[listIndex].items.push({
                name: item,
                id: uuidv4(),
            });
        },
        removeList(state, payload) {
            let projectIndex = payload.projectIndex;
            let listIndex = payload.listIndex;
            state.projects[projectIndex].lists.splice(listIndex, 1);
        },
        updateListPosition(state, payload) {
            let projectIndex = payload.projectIndex;
            let lists = payload.lists;
            state.projects[projectIndex].lists = lists;
        },
        removeItem(state, payload) {
            let projectIndex = payload.projectIndex;
            let listIndex = payload.listIndex;
            let itemIndex = payload.itemIndex;
            state.projects[projectIndex].lists[listIndex].items.splice(itemIndex, 1);
        },
        editItem(state, payload) {
            let projectIndex = payload.projectIndex;
            let listIndex = payload.listIndex;
            let itemIndex = payload.itemIndex;
            let itemName = payload.newName;
            Vue.set(state.projects[projectIndex].lists[listIndex].items[itemIndex], 'name', itemName);
        }
    },
    actions: {
        addProject({ commit }, payload) {
            let project = payload.project;
            if(project.name == '' || project.name == undefined) {
                project.name = 'Untitled project';
            }
            project.id = uuidv4();
            commit('addProject', project);
        },
        addList({ commit, state }, payload) {
            let list = payload.list;
            let projectIndex = state.projects.findIndex(proj => {
                return proj.id == payload.projectId;
            });
            if(projectIndex > -1) {
                commit('addList', { projectIndex, list });
            }
        },
        removeList({ commit, state }, payload) {
            let listId = payload.listId;
            let projectIndex = state.projects.findIndex(proj => {
                return proj.id == payload.projectId;
            });
            if(projectIndex > -1) {
                let listIndex = state.projects[projectIndex].lists.findIndex(el => {
                    return el.id == listId;
                });
                if(listIndex > -1) {
                    commit('removeList', { projectIndex, listIndex });
                }
            }
        },
        updateListPosition({ commit, state }, payload) {
            let lists = payload.lists;
            let projectIndex = state.projects.findIndex(proj => {
                return proj.id == payload.projectId;
            });
            if(projectIndex > -1) {
                commit('updateListPosition', { projectIndex, lists });
            }
        },
        addItem({ commit, state }, payload) {
            let item = payload.item;
            let listId = payload.listId;
            let projectIndex = state.projects.findIndex(proj => {
                return proj.id == payload.projectId;
            });
            if(projectIndex > -1) {
                let listIndex = state.projects[projectIndex].lists.findIndex(el => {
                    return el.id == listId;
                });
                if(listIndex > -1) {
                    commit('addItem', { projectIndex, listIndex, item });
                }
            }
        },
        removeItem({ commit, state }, payload) {
            let listId = payload.listId;
            let itemId = payload.itemId;
            let projectIndex = state.projects.findIndex(proj => {
                return proj.id == payload.projectId;
            });
            if(projectIndex > -1) {
                let listIndex = state.projects[projectIndex].lists.findIndex(el => {
                    return el.id == listId;
                });
                if(listIndex > -1) {
                    let itemIndex = state.projects[projectIndex].lists[listIndex].items.findIndex(el => {
                        return el.id == itemId;
                    });
                    if(itemIndex > -1) {
                        commit('removeItem', { projectIndex, listIndex, itemIndex });
                    }
                }
            }
        },
        editItem({ commit, state }, payload) {
            let listId = payload.listId;
            let itemId = payload.item.id;
            let newName = payload.newName;
            let projectIndex = state.projects.findIndex(proj => {
                return proj.id == payload.projectId;
            });
            if(projectIndex > -1) {
                let listIndex = state.projects[projectIndex].lists.findIndex(el => {
                    return el.id == listId;
                });
                if(listIndex > -1) {
                    let itemIndex = state.projects[projectIndex].lists[listIndex].items.findIndex(el => {
                        return el.id == itemId;
                    });
                    if(itemIndex > -1) {
                        commit('editItem', { projectIndex, listIndex, itemIndex, newName });
                    }
                }
            }
        },
    }
});
