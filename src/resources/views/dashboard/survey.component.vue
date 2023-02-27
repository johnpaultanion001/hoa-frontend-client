<template>
    <div v-if="showModal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">  
                      <form @submit.prevent="submit$()">
                        <div class="modal-header">
                            <slot name="header">
                                <h3>{{ survey.title }}</h3>
                            </slot>
                        </div>
                        <div class="modal-body">
                            <p>{{ survey.description }}</p>
                            <hr />
                            <slot name="body">
                                <div v-for="(value, q_index) in survey.questions" >
                                    <div class="mx-2 my-2">
                                      <label>{{ ` ${q_index + 1}. ${value.content}` }}</label>
                                      <span v-if="value.required == 1">&nbsp; - (Required)</span>
                                    </div>
                                    <div v-if="value.type === 'text'">
                                      <input type="text" class="form-control" v-model="data.answers[q_index]" :required="value.required" />
                                    </div>
                                    <div v-if="value.type === 'number'">
                                      <input type="number" class="form-control" v-model="data.answers[q_index]" :required="value.required" />
                                    </div>
                                    <div v-if="value.type === 'select'">
                                      <select class="form-control" v-model="data.answers[q_index]" :required="value.required">
                                        <option v-for="(option, o_index) in value.options" :value="option.id">{{ option.content }}</option>
                                      </select>
                                    </div>
                                    <div v-if="value.type === 'radio'" class="mx-4">
                                      <div v-for="(option, o_index) in value.options">
                                        <input type="radio" v-model="data.answers[q_index]" :value="option.id" :required="value.required" />
                                        <label class="ml-2">{{ option.content }}</label>
                                      </div>
                                    </div>
                                    <div v-if="value.type === 'checkbox'" class="mx-4">
                                      <div v-for="(option, o_index) in value.options">
                                        <input type="checkbox" v-model="data.answers[q_index]" :id="o_index" :true-value="[]" :value="option.content" />
                                        <label class="ml-2">{{ option.content }}</label>
                                      </div>
                                    </div>
                                </div>
                                <!-- <div class="mb-4">
                                  {{ survey.description }}  
                                </div>   -->
                            </slot>
                        </div>
                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="btn btn-danger btn-block" @click="showModal = false">
                                    Close
                                </button>
                                <button type="submit" class="btn btn-success btn-block">
                                    Submit
                                </button>
                            </slot>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script src="./survey.component.js"></script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */


.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>