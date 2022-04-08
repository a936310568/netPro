<template>
  <div class="contain">
    <div class="picBox">
      <template v-if="name === 'SW320-330W-M'">
        <img class="pic" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/5af9c3d544b24091a8e213b3ee90baaa.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/ee0d8a2eb0c64851b277b4b396cdebf5.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/96cf04a62ad547809b34fbca89584762.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW380-400W-M'">
        <img class="pic" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/6df21079ad274441b9814582aaa24d1d.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/46e0f565b37146e3957c80ab6ac6cf19.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/65085e182884463daeeaf8ac51e4b466.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW250-270W-P'">
        <img class="pic" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/13939d206b5048c1828d5bf2faa5c1e2.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/1c015dd111ad445ca216d66d0b32146e.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/65085e182884463daeeaf8ac51e4b466.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW330-350W-P'">
        <img class="pic" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/58a664b3ad244c76a07cce6c7353d46d.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/34ac975d47ad48599011082743ccb5cb.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/65085e182884463daeeaf8ac51e4b466.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW420-450W-HC'">
        <img class="pic" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/68c0a79b09164560a8cbb691b5d1ed6b.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/56006bf73c6c4b4eafd6353de2e5c104.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/65085e182884463daeeaf8ac51e4b466.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW535-550W-HC'">
        <img class="pic" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/d8629fc11b454069bc37dbc00eb971e7.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/f82a317a077d4804bf56ff06295e0229.jpg" alt="">
        <img class="pic2" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/65085e182884463daeeaf8ac51e4b466.jpg" alt="">
      </template>
      <template v-else-if="name === 'Folding Solar Panels'">
        <img class="pic" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/fb82e29dab3c4cec9cdf2144a282cccd.jpg" alt="">
        <img class="pic" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220407/d10dbd55b18c4997b80c751cd1a087b9.jpg" alt="">
      </template> 
    </div>
  </div>
</template>

<script>
// import Bus from '../../utils/bus';
// 我好想你啊，你不在的这两天我好难受，现在的我有些害怕回家，家里都是和你的回忆，每个角落我都能看到你在欢笑的样子，
// 看到你在地板上钩织，在桌子上画画，在窗台晾衣服，在床上看视频时被感动到而流下眼泪，还有在厕所里骂我又不吧浴巾拿出来。但是现在你不在了，而我还在这些回忆里。
// 其实那天晚上你独自出门的时候我很担心你，我想不到整个杭州你可以去哪里，你这个猪脑袋，又是路痴，手机没电了怎么办，迷路了怎么办，遇到坏人了怎么办。
// 联系不上你的时候我惶恐极了，甚至已经在去警察局的路上了，那天晚上我意识到自己有多么傻逼，因为小事而欧气。其实在回程的车上我就想去缓解了，
// 看到你的手也很想抓起，但是每次想开口问你中间坐的难不难受，要不要让他们停车，休息一下，话到嘴边又咽了回来，怄气的想着，这一次想让你主动和我说话，问我脸上疼不疼，因为自己这周有些不好的情绪。
// 我还是很喜欢你，这一次的矛盾让我知道你有多重要，我再也不想体会失去你的感觉。回想了之前的点点滴滴，明白了我有多少的不好，现在我真的好想补偿你。
// 我知道自己在生活习性方面表现的很糟糕，做一些事情也总是拖拖拉拉的到最后才去处理，好多地方老是惹你生气。
// 之前你生气的时候，我老是口头答应你改，改，改，之后却又抛到脑后。但你相信我，这次我真的意识到事态的严重了，如果我再做的不好，就一定会失去你了。
// 你不在家的这两天里，我一直在反省着自己。我发现，你所反感我的那些点，其实都是对我好的。那些是好的生活习性，做到这些并不会让我压抑。而且我不会再
// 敷衍了事了，不会做过的事情让你还需要在做一遍，被你提醒一遍的事情下次还会发生。这次我是很认真的想要做好这些事情，让自己变成一个自律的人，让你可以更舒适的在我们的生活里。
// 在很多方面我也表现的很不成熟，比如前天我就因为自己的情绪而做了很多幼稚且愚蠢的事情，在生活上我也表现的很糟糕，你们想起我总会觉得我很马虎。
// 但我这次是真的想要变好，变成熟，让你觉得我能够照顾到你，呵护你。我知道现在说这个你可能会觉得很可笑，因为我有过太多失败的例子了。
// 但这次真的不一样，之前做那些事情的时候，都是一些得过且过的心态，于是有好多事情都做的敷衍。但是这次的矛盾让我醒悟了，我必须改变，
// 不再吊儿郎当，承担自己的责任，大家才会觉得我靠谱，我们之间的爱情也不会显得是小孩子玩游戏那般。
// 一直以来我都忽略了好多事情，误以为在你身边就是对你的陪伴，然后就自顾自的玩游戏。但是经过这两天的反省，我真的想要走近你，和你一起做一些我们感兴趣的事情，
// 和你画画，写字，甚至是编织。昨天我尝试的去做一些你平常会做的事情，发现其实真的好好玩呀，我们两的照片经过纸币呈现出另外一种模样，一边画画一边回想当时拍照的场景。
// 哈哈，其实不怎么敢去想你，每次一想眼睛都会湿，想着是不是真的要把你弄丢了。我真的好想再珍惜你一次，这一次绝对不会让你伤心难过。
// 我承诺，我一定能做到的，变成那个温柔的人，靠谱的人，不再幼稚，有宽厚的肩膀让你依偎。
// 我知道你现在一定很不安，今年许多事情都不大顺利，如果大姐头他们回家了，最亲的家人不在了，在杭州也没有可靠的朋友，但请你一定要相信我，我能够做到他们所能给你的一切。
// 当面临问题了，能够让你想起，没关系的，阿澎哥还在，他能替我解决，他是我所能够依偎的，在杭州我不害怕。
// 我知道因为上次的工作问题，我爸妈的表现让你很寒心，哪怕他们之前对你如何，那些言语一定重伤到你，让你面对他们时有了一些生疏和担忧。其实作为他们的儿子
// 我能够感受到他们对你是发自内心的喜欢，甚至他们是很维护你的，绝对不会让我在他们面前欺负你。因为想着可能随着时间流逝，你会淡忘那些言论，我就没有去消除这个误会了，
// 但你放心，下次回家的时候，这个误会一定会消除的。
// 这次我真的很想走进你的内心，真的很想改变自己，让自己成为一个靠谱的人，能够照顾到你的情绪，在各个方面都能给你带来帮助，让你有所依偎，让你安心。
// 不是一时兴起，是毫不犹豫。
// 对了，明天送你个礼物，今晚我会认真的去做它，你可以开始期待啦。


export default {
  name: 'Products',
  data() {
    return{
      name:'',
    }
  },
  watch: {
    '$route' (to, from) {   //监听路由是否变化
      if(to.query.name != from.query.name && to.query.name != null){
        this.name = to.query.name;
      }
    },
  },
  mounted() {
    this.name = this.$route.query.name
  },
}
</script>

<style scoped>
  .contain {
    width: 100%;
    margin-bottom: 80px;
  }
  .picBox {
    width: 80%;
    margin-left: 10%;
  }
  .pic {
    width: 96%;
    height: auto;
    margin-left: 5%;
  }
  .pic2 {
    width: 82%;
    margin-left: 9%;
    height: auto;
  }
</style>