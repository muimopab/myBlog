<template>
  <div>
    <el-drawer title="个人信息"
               :size="'70%'"
               :modal="false"
               :visible="drawer"
               :direction="direction"
               :before-close="handleClose"
               :destroy-on-close="true"
               :wrapperClosable="false">
      <el-form ref="formData"
               :model="formData"
               :rules="formRules"
               show-message
               :status-icon="true"
               :hide-required-asterisk="false"
               style="padding:20px"
               label-width="60px"
               :disabled="!isEdit"
               size="medium">
        <!-- 第一行 -->
        <el-row>
          <el-col :span="8">
            <el-form-item label="昵称:"
                          prop="nickName">
              <el-input v-model="formData.nickName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机:"
                          prop="mobilePhone">
              <el-input v-model="formData.mobilePhone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="邮箱:"
                          prop="mailBox">
              <el-input v-model="formData.mailBox"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row>
          <el-col :span="8">
            <el-form-item label="预留">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="预留">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="预留">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row>
          <el-col :span="8">
            <el-form-item label="预留">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="预留">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="预留">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第四行 -->
        <!-- 第五行 -->

      </el-form>
      <!-- 按钮组 -->
      <transition name="el-zoom-in-bottom">
        <div style="text-align:center"
             v-if="isEdit">
          <el-button size="medium">取消</el-button>
          <el-button size="medium"
                     @click="resetForm('formData')">清空</el-button>
          <el-button size="medium"
                     type="primary"
                     @click="submitForm('formData')">保存</el-button>
        </div>
        <div style="text-align:center"
             v-else>
          <el-button @click="isEdit=true"
                     size="medium"
                     type="primary">编辑</el-button>
        </div>
      </transition>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isEdit: false,
      direction: 'rtl',
      formData: {
        nickName: "",
        mobilePhone: "",
        mailBox: "",
      },
      formRules: {
        nickName: [
          { required: true, message: '请输入用户昵称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        mobilePhone: [
          { required: true, message: '请输入常用手机', trigger: 'blur' },
          { pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, message: '请输入正确手机号格式', trigger: 'blur' }
        ],
        mailBox: [
          { required: true, message: '请输入常用邮箱', trigger: 'blur' },
          { pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, message: '请输入正确的邮箱格式', trigger: 'blur' }
        ],
      }
    };
  },
  watch: {
    drawer () {
      if (!this.drawer) {
        this.$refs.formData.clearValidate()
        this.$set(this, 'isEdit', false)
      }
    }
  },
  methods: {
    //   表单验证
    submitForm (formData) {
      let vm = this;
      this.$refs[formData].validate((vaid, error) => {
        if (vaid) {
          vm.$set(vm, 'isEdit', false)
          this.$message({
            type: "success",
            message: "保存成功",
            offset: 0,
          })
        } else {
          if (Object.keys(error).length != 0) {
            this.$message({
              type: "error",
              message: "保存失败，请检查信息"
            })
          }

        }
      })
    },
    // 表单数据清空
    resetForm (formName) {
      this.$refs[formName].resetFields();
      this.formData = {}
    },
    handleClose (done) {
      let vm = this;
      this.$confirm('确认关闭？')
        .then(() => {
          vm.$emit("drawClosed", false)
          done();
        })
        .catch(_ => { });
    }
  }
}
</script>

<style lang="scss">
.el-drawer {
  pointer-events: auto;
}
.el-drawer__wrapper {
  pointer-events: none;
}
</style>