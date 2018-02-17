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
        removeList(state, payload) {
            let projectIndex = payload.projectIndex;
            let listIndex = payload.listIndex;
            state.projects[projectIndex].lists.splice(listIndex, 1);
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
        }
    }
});
