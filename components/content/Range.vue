<template>
  <ul class="container">
    <li>
      <span class="label">Balance</span>
      <div class="scale">
        <div :class="['dot', balanceClass]" />
        <div class="track" />
      </div>
    </li>

    <li>
      <span class="label">Bitter</span>
      <div class="scale">
        <div :class="['dot', bitterClass]" />
        <div class="track" />
      </div>
    </li>

    <li>
      <span class="label">Savory</span>
      <div class="scale">
        <div :class="['dot', savoryClass]" />
        <div class="track" />
      </div>
    </li>

    <li>
      <span class="label">Sour</span>
      <div class="scale">
        <div :class="['dot', sourClass]" />
        <div class="track" />
      </div>
    </li>

    <li>
      <span class="label">Sweet</span>
      <div class="scale">
        <div :class="['dot', sweetClass]" />
        <div class="track" />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";
  @import "/assets/style/type.scss";

  .container {
    display: flex;
    flex-direction: column;
    border-top: 0.5px solid var(--color--secondary);
    border-bottom: 0.5px solid var(--color--secondary);
    padding: 2.4rem 0;
  }

  li {
    @include monospace;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .label {
    width: 16ch;
  }

  .scale {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    transform: translateY(0.1rem);
  }

  .track {
    width: 100%;
    height: 0.5px;
    background: var(--color--tertiary);
  }

  .dot {
    position: absolute;
    left: 0;
    border-radius: 10px;
    min-width: 0.8rem;
    min-height: 0.8rem;
    background: var(--color--primary);
  }
</style>

<script setup>
  const props = defineProps({
    balanceClass: {
      type: String,
      default: "",
    },
    bitterClass: {
      type: String,
      default: "",
    },
    savoryClass: {
      type: String,
      default: "",
    },
    sourClass: {
      type: String,
      default: "",
    },
    sweetClass: {
      type: String,
      default: "",
    },
  })

  console.log(props.sweetClass)
</script>
