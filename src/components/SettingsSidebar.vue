<template>
    <div>
        <button 
            :class="['button', 'is-outlined', toggleSettings ? 'moveSettings' : 'right0']" 
            id="settings" 
            @click="toggleSettings = !toggleSettings">
            <i class="fas fa-cog"></i>
        </button>
        <div :class="['sidemenu', toggleSettings ? 'showSidemenu' : 'hideSidemenu' ]">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                    Settings
                    </p>
                </header>
                <div class="card-content">
                    <div class="columns is-multiline">
                        <div class="column is-6" 
                            v-for="(bg, index) in backgrounds"
                            :key="index"
                        >
                            <div class="cursor-pointer coloredBg"
                                :style="{ backgroundColor: bg.value}"
                                @click="changeBackground(bg)"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SettingsSidebar',
  data() {
      return {
            toggleSettings: false,
            backgrounds: [
                {
                    label: 'default', 
                    value: '#dadada'
                },
                {
                    label: 'dark',
                    value: '#333333'
                },
                {
                    label: 'darkblue',
                    value: 'darkblue'
                },
                {
                    label: 'dodgerblue',
                    value: 'dodgerblue'
                },
                {
                    label: 'green',
                    value: 'green'
                },
                {
                    label: 'firebrick',
                    value: 'firebrick'
                }
            ]
      }
  },
  methods: {
    changeBackground(bg) {
        let background = bg.value;
        let projectId = this.projectId;
        this.$store.dispatch('updateProjectBackground', {
            projectId,
            background
        });
        document.documentElement.style.cssText = "background-color: "+ background;
    }
  },
  props: ['projectId']
}
</script>

<style scoped>
    #settings {
        font-size: 1.4rem;
        position: fixed;
        top: 0;
        z-index: 1;
        transition: right 250ms;
    }

    .right0 {
        right: 0;
    }

    .moveSettings {
        right: 300px;
    }

    .sidemenu {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 300px;
        transition: right 250ms;
        background-color: #fff;
        z-index: 1;
    }

    .sidemenu > .card {
        height: 100%;
    }

    .sidemenu > .card > .card-content {
        height: 100%;
        overflow-y: auto;
        padding-top: 10px;
    }

    .hideSidemenu {
        right: -300px;
    }

    .showSidemenu {
        right: 0;
    }

    .coloredBg {
        width: 100%;
        height: 50px;
        border-radius: 5px;
    }
</style>
