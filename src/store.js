import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isCollapsed: false,
        headerHeight: '64px',
        siderWidth: '200px',
        collapsedWidth: '78px'
    },
    mutations: {
        siderCollapseToggle (state) {
            state.isCollapsed = !state.isCollapsed
        }
    },
    actions: {
        siderCollapseToggle ({ commit }) {
            commit('siderCollapseToggle')
        }
    },
    getters: {
        leftPadding(state) {
            return state.isCollapsed ? state.collapsedWidth : state.siderWidth;
        }
    }
})
