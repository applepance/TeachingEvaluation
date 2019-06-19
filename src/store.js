import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// CEO
const state = {
  class: [
    {
      no: "1101",
      lessonNo: "111101",
      lesson: "软件工程",
      date: "2018-2019第二学期",
      rate: 0
    },
    {
      no: "1102",
      lessonNo: "111102",
      lesson: "算法",
      date: "2018-2019第二学期",
      rate: 0
    },
    {
      no: "1103",
      lessonNo: "111103",
      lesson: "数据结构",
      date: "2018-2019第二学期",
      rate: 0
    },
    {
      no: "1104",
      lessonNo: "111104",
      lesson: "大物",
      date: "2018-2019第二学期",
      rate: 0
    },
    {
      no: "1105",
      lessonNo: "111105",
      lesson: "大数",
      date: "2018-2019第二学期",
      rate: 0
    },
    {
      no: "1106",
      lessonNo: "111106",
      lesson: "大英",
      date: "2018-2019第二学期",
      rate: 0
    }
  ],
  teacher: [
    {
      no: "1101",
      college: "软件",
      name: "王小虎"
    },
    {
      no: "1102",
      college: "软件",
      name: "李强"
    },
    {
      no: "1103",
      college: "软件",
      name: "阿水"
    },
    {
      no: "1104",
      college: "理学院",
      name: "王小兔"
    },
    {
      no: "1105",
      college: "理学院",
      name: "梨落"
    },
    {
      no: "1106",
      college: "英语",
      name: "阿牛"
    }
  ],
  student: [
    {
      college: '软件',
      no: '201620180101',
      name: '张三',
      lessonNo: '111101'
    },
    {
      college: '软件',
      no: '201620180102',
      name: '李四',
      lessonNo: '111102'
    },
    {
      college: '软件',
      no: '201620180103',
      name: '狗哥',
      lessonNo: '111103'
    },
    {
      college: '软件',
      no: '201620180104',
      name: '铁锹',
      lessonNo: '111104'
    },
    {
      college: '软件',
      no: '201620180105',
      name: '坤坤',
      lessonNo: '111105'
    },
    {
      college: '软件',
      no: '201620180106',
      name: '蔡广',
      lessonNo: '111106'
    }
  ]
}

// 改变 唯一可以修改状态的地方
// 财务
const mutations = {
  changeRate(state, Object) {
    state.class.map(cla => {
      if (Object.lessonNo === cla.lessonNo) {
        cla.rate = Object.rate
      }
      return cla
    })
  },
  addRate(state, Object) {
    state.class.map(cla => {
      if (Object.lessonNo === cla.lessonNo) {
        cla.rate = 0
      }
      return cla
    })
  },
  addUser(state, Object) {
    let college = Object.college
    let name = Object.name
    let no = Object.no
    let lessonNo = Object.lessonNo
    let newStudent = { college, no, name, lessonNo }
    state.student.push(newStudent)
  },
  updateMsg(state, Object) {
    state.student.map(student => {
      if (Object.lessonNo === student.lessonNo) {
        student.lessonNo = Object.num
      }
      return student
    })
    state.class.map(cla => {
      if (Object.no === cla.no) {
        cla.lessonNo = Object.num
        cla.lesson = Object.lesson
      }
      return cla
    })
  },
  msgDelete(state, Object) {
    state.teacher.splice(state.teacher.findIndex((item) => item.no === Object.no), 1);
    state.class.splice(state.class.findIndex((item) => item.lessonNo === Object.lessonNo), 1);
    state.student.splice(state.student.findIndex((item) => item.lessonNo === Object.lessonNo), 1);
  },
  updateUser(state, Object) {
    state.class.map(cla => {
      if (Object.lessonNo === cla.lessonNo) {
        cla.lessonNo = Object.num
        cla.lesson = Object.lesson
      }
      return cla
    })
    state.student.map(student => {
      if (Object.lessonNo === student.lessonNo) {
        student.lessonNo = Object.num
      }
      return student
    })
  },
  handleDelete(state, Object) {
    state.student.splice(state.student.findIndex((item) => item.no === Object.no), 1);
    state.teacher.splice(state.teacher.findIndex((item) => item.no === state.class.find(item => item.lessonNo === Object.lessonNo).no), 1);
    state.class.splice(state.class.findIndex((item) => item.lessonNo === Object.lessonNo), 1);
  }
}

// 动作 部门 不能修改 state
const actions = {
  changeRate: ({ commit }, Object) => commit('changeRate', Object),
  addRate: ({ commit }, Object) => commit('addRate', Object),
  addUser: ({ commit }, Object) => commit('addUser', Object),
  updateMsg: ({ commit }, Object) => commit('updateMsg', Object),
  msgDelete: ({ commit }, Object) => commit('msgDelete', Object),
  updateUser: ({ commit }, Object) => commit('updateUser', Object),
  handleDelete: ({ commit }, Object) => commit('handleDelete', Object)
}
// 组件里的computed
const getters = {
  rateTableData: state => {
    return state.class.map(item => {
      let newitem = state.teacher.find(teacher => teacher.no === item.no) || {};
      item.college = newitem.college || '';
      item.name = newitem.name || '';
      item.evaluate = ((item.rate / 5 * 100) + '%') || '';
      return item;
    });
  },
  stuTableData: state => {
    return state.student.map(item => {
      let newitem = state.class.find(cla => cla.lessonNo === item.lessonNo) || {};
      item.lesson = newitem.lesson || '';
      item.date = newitem.date || '';
      return item;
    });
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})