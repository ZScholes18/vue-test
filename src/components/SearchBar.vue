<template>
    <div class="f-cb">
        <el-input class="input" v-model="input" :placeholder="placeholder"></el-input>
        <el-button type="primary" class="button" @click="setName">搜索</el-button>
    </div>
</template>



<script>
import Api from '../api';
export default {
    name: 'SearchBar',
    data() {
        return {
            input: ''
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
