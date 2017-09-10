import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        selected: 'profile',
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'work history', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' }
            ],
            profile: {
                name: '',
                city: '',
                title: ''
            },
            'work history': [
                {company: 'AL', content: '我的第二份工作是'},
                {company: 'TX', content: '我的第一份工作是'}
            ],
            education: [
                {school: 'AL', content: 'xxxxxxxx'},
                {school: 'TX', content: 'xxxxxxxx'}
            ],
            projects: [
                {company: 'xxxx', content: 'xxxxxxx'},
                {company: 'xxxx', content: 'xxxxxxx'}
            ],
            awards: [
                {company: 'a', content: 'a'},
                {company: 'b', content: 'b'}
            ],
            contacts: [
                {company: 'phone', content: '1233445'},
                {company: 'qq', content: '654321'}
            ],
            others: []
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        switchTab (state, payload) {
            state.selected = payload
        }
    }
})
