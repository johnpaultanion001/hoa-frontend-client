<template>
    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">Messages</p>
        </div>

        <div class="col-lg-12">
            <form @submit.prevent="store$()">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control" required v-model="data.subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <textarea v-model="data.body" type="text" class="form-control" placeholder="Content..." required />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 pr-1">
                        <button type="submit" class="btn btn-primary btn-block">Send</button>
                    </div>
                    <div class="col-6 pl-1">
                        <button type="button" @click="$router.go(-1)" class="btn btn-danger btn-block">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./list.component.js"></script>
