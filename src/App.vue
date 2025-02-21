<template>
  <div>
    <CardVue />
    <TreeVue :data="treeData" />
  </div>
</template>

<script setup lang='ts'>
  // 这样就注册成了局部组件，如果想要将此组件注册为全局组件，则需要在main.ts中导入并注册
  // import CardVue from '@/components/components-study/Card.vue';
  import TreeVue from '@/components/components-study/Tree.vue';     // 展示递归组件

  // 造一点数据
  interface Tree {
    name: string;
    checked: boolean;
    children?: Tree[];
  }

  const treeData: Tree[] = [
    {
      name: '一级 1',
      checked: false,
      children: [
        {
          name: '一级 1 - 二级 1',
          checked: false,
        },
        {
          name: '一级 1 - 二级 2',
          checked: false,
        },
      ],
    },
    {
      name: '一级 2',
      checked: false,
      children: [
        {
          name: '一级 2 - 二级 1',
          checked: false,
        },
        {
          name: '一级 2 - 二级 2',
          checked: false,
          children: [
            {
              name: '一级 2 - 二级 2 - 三级 1',
              checked: false,
            },
            {
              name: '一级 2 - 二级 2 - 三级 2',
              checked: false,
            },
          ],
        },
      ],
    },
    {
      name: '一级 3',
      checked: false,
    }
  ]
</script>

<style lang='scss'>

  #app,
  html,
  body {
    padding: 0;
    margin: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  * {
    padding: 0;
    margin: 0;
  }
</style>