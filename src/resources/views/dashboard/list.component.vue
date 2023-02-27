<template>
    <div>
        <div class="row mb-4 px-3">
            <div v-for="(value, index) in surveys">
                <survey-component :survey="value" />
            </div>
            <div class="col-lg-12 text-center">
                <p class="h2 py-4 my-0">Announcements</p>
            </div>

            <div :key="key" v-for="(value, key) in events_announcements.data" :class="{ 'bg-light': $isOdd(key) }" class="col-md-12 py-3 py-3 border-top border-bottom border-left border-right rounded-top cursor-pointer" @click="$refs.show_event_announcement.show(value.body)">
                <h5><i class="fa fa-bullhorn fa-1x"></i> {{ value.title }}</h5>
                <p class="mb-2">{{ value.description }}</p>

                <div>
                    <i class="fas fa-tags"></i> <span v-for="(v, k) in value.tags" :key="k" class="badge bg-secondary rounded text-white mx-1">{{ v }}</span>
                </div>
                <div class="mt-2">
                    <span>Posted {{ $formatDate(value.date) }} {{ $formatTime(value.time) }}</span>
                </div>
            </div>
            <template>
                <div   class="col-md-12 py-3 py-3 border-top border-bottom border-left border-right rounded-top cursor-pointer rounded-0 text-center cursor-pointer font-weight-bold">

                  <paginate-component
                      v-if="$toPageCount(events_announcements.total, events_announcements.per_page ) > 1"
                      :page_count="$toPageCount(events_announcements.total, events_announcements.per_page )"
                      @event="search$"/>
                </div>
            </template>
        </div>

        <div class="row mb-4">
            <div class="col-lg-12 text-center">
                <p class="h2 py-4 my-0">Dashboard</p>
            </div>

            <template v-for="(value, key) in data">
                <template>
                    <router-link tag="div" class="col-sm-6 py-3 col-md-6 col-lg-4 text-center cursor-pointer" v-if="value.value" :to="{ name: value.value.path }" :key="key">
                        <div class="card action">
                            <div class="card-body">
                                <i :class="value.value.icon" class="fa-4x"></i>
                            </div>
                            <div class="card-footer bg-transparent lead">{{ value.value.name }}</div>
                        </div>
                    </router-link>
                </template>
            </template>
        </div>
        <show-event-announcement ref="show_event_announcement" />
    </div>
</template>

<script src="./list.component.js"></script>

<style scoped lang="scss">
.action {
    transition: background-color 1s;
    &:hover {
        background: #e9ecef;
    }
}
</style>
