<script setup lang="ts">
import { ref, onMounted } from 'vue';

const visible = ref(false);

onMounted(() => {
  const bool = sessionStorage.getItem('isAgreed') ? JSON.parse(sessionStorage.getItem('isAgreed')) : false;

  visible.value = !bool;
});

const agree = () => {
  sessionStorage.setItem('isAgreed', 'true');
  visible.value = false;
};
</script>

<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '50rem', padding: '2rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" :closable="false">
    <div class="wrapper">
      <div style="width: 200px; height: 200px; border-radius: 20px; overflow: hidden">
        <img src="/robot.png" alt="" style="object-fit: cover" width="200" height="200" />
      </div>
      <div>
        <h2 style="display: flex; align-items: center; gap: 10px">
          <div style="width: 30px">
            <img src="/vector-sparkle.svg" alt="ai" />
          </div>
          We use AIs
        </h2>
        <p style="font-size: 16px; margin-top: 20px">
          해당 사이트에서 제공되는 음성은 AI에 의해 제작된 딥보이스를 포함하고 있습니다.<br />
          이용에 동의하시겠습니까?<br /><br />
          <span style="color: #666; font-weight: 300; font-size: 14px"> * 동의하지 않는 경우 사이트 이용에 제한이 있을 수 있습니다. </span>
        </p>
        <div class="buttons">
          <Button style="padding: 5px 10px" @click="agree">동의</Button>
          <Button style="padding: 5px 10px" severity="secondary">동의하지 않음</Button>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

@media (max-width: 700px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

@media (max-width: 700px) {
  .buttons {
    justify-content: center;
  }
}
</style>
