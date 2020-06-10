<template>
  <div class="app-container">
    <!-- 顶部区域 -->
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-closeempty mui-pull-left"></a>
      <h1 class="mui-title">商品详情</h1>
    </header>
    <!-- 中间路由区域 -->
    <div class="mui-content"></div>
    <div id="slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop img-b">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="./images/" />
          </a>
        </div>
        <!-- 第一张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/商品.png" />
          </a>
        </div>
        <!-- 第二张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/商品.png" />
          </a>
        </div>
        <!-- 第三张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/商品.png" />
          </a>
        </div>
        <!-- 第四张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="./images/商品.png" />
          </a>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="./images/商品.png" />
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
        </div>
        <div class="mui-card-footer">页脚</div>
      </div>

      <div class="mui-card">
        <div
          class="mui-card-header mui-card-media"
          style="height:40vw;background-image:url(images/商品.png)"
        ></div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>Posted on January 18, 2016</p>
            <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <a class="mui-card-link">Like</a>
          <a class="mui-card-link">Read more</a>
        </div>
      </div>
    </div>
    <!-- 底部区域 -->
    <h1>123</h1>
  </div>
</template>
<script src="lib/mui/js/mui.min.js"></script>
<script >
mui.init({
  swipeBack: true //启用右滑关闭功能
});
var slider = mui("#slider");
document.getElementById("switch").addEventListener("toggle", function(e) {
  if (e.detail.isActive) {
    slider.slider({
      interval: 5000
    });
  } else {
    slider.slider({
      interval: 0
    });
  }
});
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.app-container .mui-icon {
  color: #000;
  font-size: 36px;
}
.img-b {
  background-color: #fff;
  left: 0px;
  width: 751px;
  height: 563px;
  z-index: 6;
}
.img-b img {
  width: 100%;
  height: 0;
  background-color: #fff;
}
</style>