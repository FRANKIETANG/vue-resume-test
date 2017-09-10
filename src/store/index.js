import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: 'profile',
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'workHistory', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' }
            ],
            profile: {
                name: '游戏的王者',
                city: '木叶村',
                title: '我要成为海贼王的男人',
                birthday: '1995-12-30'
            },
            workHistory: [
                {company: '美国白宫', content: '搞死了记者和自己提拔的州长，怼走了总统，从党鞭当上了总统'},
                {company: '房车', content: '我有个名字叫 Heisenberg，搞死了所有的竞争对手，New Mexico 最大的毒枭'}
            ],
            education: [
                {school: 'King\'s Landing 的小房子', content: '学了一年跳舞'},
                {school: 'House of Black and White', content: '学会当一名 no one'}
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
        switchTab (state, payload) {
            state.selected = payload
        }
    }
})
