<template>
    <div class="f-cb">
        <el-input class="input" icon="search" v-model="input" :placeholder="placeholder" @keyup.enter.native="setName" :on-icon-click="searchClick">></el-input>
    </div>
</template>

<script>
import Api from '../../api';
export default {
    name: 'SearchBar',
    data() {
        return {
            input: ''
        }
    },
    computed: {
        condition() {
            if(this.input == '') {
                return false;
            }
            return this.input;
        }
    },
    methods: {
        setName: function () {
            var input = this.input;
            if (input.trim() == '') {
                alert("empty");
            }
            else {
                Api.searchTest(this.input,this.success );
            }

        },
        success(responseData) {
            this.callback(responseData);
        },
        searchClick() {
            if(this.condition) {
                this.$emit('searchClick',this.condition);
            }
            else {
                alert('oh my god! it is empty!');
            }
        }
    },
    props: ['placeholder', 'apiName', 'moduleName', 'mutationName','callback']
}
</script>
<style scoped>
.input {
    float: left;
}

.button {
    float: left;
    margin-left: 25px;
}

.f-cb:after,
.f-cbli li:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}

.f-cb,
.f-cbli li {
    zoom: 1;
}
</style>
