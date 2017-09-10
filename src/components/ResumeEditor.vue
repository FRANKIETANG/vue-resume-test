<template>
    <div id='resumeEditor'>
        <nav>
            <ol>
                <li v-for="(item,index) in resume.config"
                :class="{active: item.field === selected}"
                @click="selected = item.field"
                >
                <svg class="icon">
                    <use :xlink:href="`#icon-${item.icon}`"></use>
                </svg>
                </li> 
                <!-- <li class="active"> x </li>
                <li> x </li>
                <li> x </li>
                <li> x </li>
                <li> x </li>
                <li> x </li>
                <li> x </li>         -->
            </ol>
        </nav>
        <ol class="panels">
            <li v-for="item in resume.config" 
            v-show="item.field === selected">
                 {{resume[item.field]}}   
            </li>
            <!-- <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li> -->
        </ol>   
    </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  data(){
      return{
          selected: 'profile',
          resume: {
              config: [
                  { field: 'profile', icon: 'id' },
                  { field: 'work history', icon: 'work' },
                  { field: 'education', icon: 'book' },
                  { field: 'projects', icon: 'heart' },
                  { field: 'awards', icon: 'cup' },
                  { field: 'contacts', icon: 'phone' },
              ],
              profile: {
                  name: '',
                  city: '',
                  title: ''
              },
              'work history': [],
              education: [],
              projects: [],
              awards: [],
              contacts: [],
              others: []
          }
      }
  }
}
</script>

<style lang='scss'>
  #resumeEditor{
      background: #fff;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
      display: flex;
      flex-direction: row;
      overflow: auto;
      nav{
          width: 80px;
          background: black;
          color: #FFF;
      }
      ol{
          li{
              height: 48px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 16px;
              margin-bottom: 16px;
              &.active{
                  background: white;
                  color: black;
              }
          }
      }
      svg.icon{
          width: 24px;
          height: 24px;
      }
  }
  ol{
      list-style: none;
  }
</style>
