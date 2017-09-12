import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: 'profile',
        user: {
            id: '',
            username: ''
        },
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
                {name: '可口可乐广告', content: '离开了 BBDO，消失了3个月创造了脍炙人口的广告歌《everyday》'},
                {name: 'Lucky Strike等一系列广告'}
            ],
            awards: [
                {name: 'Pied Piper的核心和算法', content: '以破纪录的压缩成绩获得了冠军'}
            ],
            contacts: [
                {name: 'phone', content: '1233445'},
                {name: 'qq', content: '654321'}
            ],
            others: []
        }
    },
    mutations: {
        initState (state, payload) {
            Object.assign(state, payload)
        },
        switchTab (state, payload) {
            state.selected = payload
            localStorage.setItem('state', JSON.stringify(state))
        },
        updateResume (state, {path, value}) {
            objectPath.set(state.resume, path, value)
            localStorage.setItem('state', JSON.stringify(state))
        },
        setUser (state, payload) {
            Object.assign(state.user, payload)
            console.log(state.user)
        },
        removeUser (state) {
            state.user.id = ''
        }
    }
})
