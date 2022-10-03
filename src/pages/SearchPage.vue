<template>
  <section class="page page-search">
    <div class="container">
      <p class="page-search-title">Поиск клиента в АФМ</p>
      <div class="page-search-input">
        <the-mask
          mask="### ### ### ###"
          v-model="iin"
          type="text"
          :masked="false"
          placeholder="Введите ИИН"
        ></the-mask>
        <img src="@/assets/images/camera.svg" alt="Camera Icon" />
      </div>
      <primary-button
        :text="isVisible ? 'Выполнить новый поиск' : 'Выполнить поиск'"
        @click.native="startProcess"
        :disabled="iin.length !== 12"
      ></primary-button>
    </div>
    <div v-if="isVisible" class="page-search-result">
      <span v-if="hasUserFound" class="text-error">Клиент обнаружен</span>
      <span v-if="!hasUserFound" class="text-success">Клиент не обнаружен</span>
      <span class="text-blue">{{
        hasUserFound
          ? "Проведение сделок с клиентом не рекомендуется"
          : "Проведение сделок с данным клиентом возможно"
      }}</span>
    </div>
    <p class="page-search-description text-description">
      Сервис позволяет найти клиента в списке агенства финансового мониторинга
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import afmApi from "@/services/afm.api";
import axiosErrorType from "@/helpers/axiosErrorType";
import Person from "@/models/Person";
import { TheMask } from "vue-the-mask";

export default Vue.extend({
  name: "MainPage",
  components: {
    TheMask,
  },
  data: function () {
    return {
      iin: "",
      person: {} as Person,
      personList: [] as Person[],
      isVisible: false,
    };
  },
  computed: {
    hasUserFound(): boolean {
      return this.person && Object.keys(this.person).length !== 0
        ? true
        : false;
    },
  },
  watch: {
    iin() {
      if (this.iin.length === 0) {
        this.isVisible = false;
      }
    },
  },
  methods: {
    async initData(): Promise<void> {
      try {
        const personList = await afmApi.getPersons();
        this.personList = personList;
      } catch (err) {
        if (axiosErrorType(err)) {
          console.log(err.message);
          // Send error logs to service
        }
      }
    },
    findByIin(personList: Person[], iin: string): void {
      const person = personList.find((person) => person.iin._text == iin);
      if (person && Object.keys(person).length !== 0) {
        this.person = person;
      } else {
        this.person = {} as Person;
      }
    },
    async startProcess(): Promise<void> {
      if (this.personList.length === 0) {
        await this.initData();
      }
      this.findByIin(this.personList, this.iin);
      this.isVisible = true;
    },
  },
});
</script>
