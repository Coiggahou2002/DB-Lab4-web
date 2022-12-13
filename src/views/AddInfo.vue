<template>
  <section class="select-none">
    <div class=" mb-8 text-xl">🐱 新猫建档</div>
    <section>
     <el-form :model="form" label-width="120px" style="max-width: 600px">
        <el-form-item label="昵称">
          <el-input v-model="form.name" placeholder="比如猫爷..." />
        </el-form-item>
        <el-form-item label="品种">
          <el-select v-model="form.type" placeholder="选择猫的品种">
            <el-option v-for="type in catTypes" :key="type.label" :label="type.label"
            :value="type.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="颜色">
          <el-select v-model="form.color" placeholder="黑猫白猫都是好猫~">
            <el-option v-for="color in catColors" :key="color.label" :label="color.label"
            :value="color.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="性格">
          <el-select v-model="form.character" placeholder="你的猫喜欢发脾气不?">
            <el-option v-for="character in catCharacters" :key="character.label" :label="character.label"
            :value="character.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="常出没的位置">
          <el-input v-model="form.location" placeholder="三食堂门口?" />
        </el-form-item>
        <el-form-item>
          <el-button type="warning" @click="onSubmit">完成猫哥初始化</el-button>
          <el-button type="danger">取消</el-button>
        </el-form-item>
      </el-form>
    </section>
  </section>
</template>

<script>
export default {
  name: "AddInfo",
  data() {
    return {
      name: "Coiggahou2002",
      catTypes: [
        {
          label: '黑猫',
          value: 'black',
        },
        {
          label: '白猫',
          value: 'white',
        },
      ],
      catColors: [
        {
          label: '橘黄',
          value: 'orange',
        },
        {
          label: '白',
          value: 'white',
        },
      ],
      catCharacters: [
        {
          label: '温柔',
          value: 'good-temper',
        },
        {
          label: '冷漠',
          value: 'cold',
        },
      ],
      form: {
        name: "",
        color: "",
        character: '',
        location: '',
        type: '',
      },
    };
  },
};
</script>
