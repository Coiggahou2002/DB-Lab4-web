<template>
  <div>
      <el-form :model="form" label-width="120px" style="max-width: 600px">
        <el-form-item label="猫">
          <el-select v-model="form.color" placeholder="选择要打卡的猫">
            <el-option
              v-for="color in catColors"
              :key="color.label"
              :label="color.label"
              :value="color.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="位置">
          <el-input v-model="form.name" placeholder="输入要打卡的位置" />
        </el-form-item>
      <el-form-item label="出现时间">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder=""
          style="width: 100%"
        />
      </el-form-item>
      <el-form-item label="投喂物品描述">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="warning" @click="onSubmit">登记</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FeedLog",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
};
</script>
