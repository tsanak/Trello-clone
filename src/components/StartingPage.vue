<template>
    <div class="columns mx-0">
        <div class="column p-0">
            <section class="hero is-medium is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-8">
                                <h1 class="title">
                                    Simple trello clone
                                </h1>
                                <h2 class="subtitle">
                                    Built with Vue + Bulma
                                </h2>
                            </div>
                            <div class="column is-4 is-flex j-center a-center">
                                <router-link class="button is-info is-large"
                                    to="/home">
                                    Get started
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="hero is-medium is-light is-bold">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column">
                                <div class="content content-icon">
                                    <div class="icon-wrapper">
                                        <span class="icon">
                                            <i class="fas fa-user-times"></i>
                                        </span>
                                    </div>
                                    <h3>No user account needed</h3>
                                </div>
                            </div>
                            <div class="column">
                                <div class="content content-icon">
                                    <div class="icon-wrapper">
                                        <span class="icon">
                                            <i class="far fa-credit-card"></i>
                                        </span>
                                    </div>
                                    <h3>It is free</h3>
                                </div>
                            </div>
                            <div class="column">
                                <div class="content content-icon">
                                    <div class="icon-wrapper">
                                        <span class="icon">
                                            <i class="fas fa-user-secret"></i>
                                        </span>
                                    </div>
                                    <h3>No information is stored</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="hero is-medium is-default">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column">
                                <div class="content">
                                    <h2 class="title"><u>a little context</u></h2>
                                    <p>This was built in a weekend, so there may be loads of bugs <i class="fas fa-bug"></i></p>
                                    <h3>Technologies I used:</h3>
                                    <div class="columns">
                                        <div class="column is-flex f-d-col j-center a-center">
                                            <h4>For the javacript part:</h4>
                                            <ul>
                                                <li>
                                                    <a href="https://vuejs.org/">Vue.js</a> with 
                                                    <a href="https://router.vuejs.org/en/">vue-router</a> &amp; 
                                                    <a href="https://vuex.vuejs.org/en/">vuex</a>                                 
                                                </li>
                                                <li><a href="https://www.npmjs.com/package/vuex-persistedstate">vuex-persistedstate</a></li>
                                                <li><a href="https://github.com/SortableJS/Vue.Draggable">Vue.Draggable</a></li>
                                                <li><a href="https://www.npmjs.com/package/uuid">uuid</a></li>
                                                
                                            </ul>
                                        </div>
                                        <div class="column is-flex f-d-col j-center a-center">
                                            <h4>For the css part:</h4>
                                            <ul>
                                                <li><a href="https://bulma.io/">Bulma.io</a></li>
                                                <li>little custom css</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3>How it works:</h3>
                                    <p class="fs-1">
                                        All the data is stored in the <b>local storage</b> of your browser (vuex-persistedstate takes care of that).<br>
                                        A central store (Vuex) is used to help keep track of all the changes and update the DOM whenever a change is made.<br>
                                        All the lists inside any project &amp; all the items of any list are draggable with the help of Vue.Draggable. <br>
                                        This means that you can sort the lists and the items however you want.
                                        For example: you have the ability to move/drag '<b>item1</b>' from '<b>list 1</b>' to '<b>list 2</b>' etc. <br>
                                        The uuid package was used to help create unique ids for all the projects, lists and items. <br>
                                        Finally you can change the background color of any project through the little settings icon ( <i class="fas fa-cog"></i> ) on the top right corner of the project's page.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="hero is-medium is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-8">
                                <h1 class="title">
                                    Give it a try
                                </h1>
                            </div>
                            <div class="column is-4 is-flex j-center a-center">
                                <router-link class="button is-info is-large"
                                    to="/home">
                                    Try it out
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                    <p>
                        Built with <i class="fas fa-heart fs-1 heart"></i> using <a href="https://vuejs.org/">Vue.js</a> + <a href="https://bulma.io/">Bulma.io</a>
                    </p>
                    <p>
                        You can find the code on <a href="https://github.com/tsanak/Trello-clone"> <i class="fab fa-github-alt fs-1"></i> github</a>
                    </p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartingPage'
}
</script>

<style scoped>
    .p-0 {
        padding: 0;
    }

    .mx-0 {
        margin-right: 0;
        margin-left: 0;
    }

    .icon-wrapper {
        height: 75px;
        width: 75px;
        border-radius: 100%;
        border: 1px solid #3c3a39;
        font-size: 1.5rem;
        transition: all 400ms;
        cursor: pointer;
    }
    
    .icon-wrapper:hover {
        background-color: #3c3a39;
        color: #f5f5f5;
        transform: rotateY(180deg);
    }

    .icon {
        height: 100%;
        width: 100%;
    }

    .content-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .f-d-col {
        flex-direction: column;
    }

    .fs-1 {
        font-size: 1.1rem;
    }

    .heart {
        transition: all 400ms;
    }

    .heart:hover {
        color: #c81c1c;
        transform: scale(1.4);
    }
</style>
