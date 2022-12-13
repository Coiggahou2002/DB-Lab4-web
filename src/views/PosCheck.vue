
<template>
 <div>
    <div class=" mb-8 text-xl">🌍 猫猫打卡</div>
     <el-form :model="form" label-width="60px" style="max-width: 600px">
        <el-form-item label="猫">
          <el-select v-model="form.color" placeholder="选择要打卡的猫">
            <el-option v-for="color in catColors" :key="color.label" :label="color.label"
            :value="color.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="位置">
          <el-input v-model="form.name" placeholder="输入要打卡的位置" />
        </el-form-item>
        <el-form-item>
          <el-button type="warning" @click="onSubmit">打卡</el-button>
        </el-form-item>
      </el-form>
  </div> 
</template>

<script>
export default {
  name: 'PosCheck',
  data() {
    return {
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
    }
  }
}
</script>