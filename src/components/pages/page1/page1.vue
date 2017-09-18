<template>
    <div>
        <handle-container>
            <anch-button class="f-fl" href="#" text="新建" @click="newEdit" />
            <new-btn v-if='permissionList.newBtn'/>
            <SearchBar class="f-fr searchbar" placeholder="请输入名字"  @searchClick="searchClick" />
        </handle-container>
        <data-table :isMultipleSelect="true" :tableData="tableData" class="datatable"/>
    </div>
</template>
<script>
// import { Container, SearchBar, DataTable } from './index';

import { HandleContainer, AnchButton } from 'components/basic';
import SearchBar from 'components/basic/SearchBar';
import DataTable from 'components/DataTable';
import api from 'api';
import {mapState,mapActions} from 'vuex';
export default {
    name: 'page1',
    data: function() {
        return {
            count: 0
        }
    },
    computed: {
        ...mapState({
            tableData: state=>state.tableList.listData,
            permissionList: 'permissionList'
        })
    },
    components: {
        SearchBar,
        DataTable,
        HandleContainer,
        AnchButton,
        newBtn(resolve) {
            require(['./buttons/newBtn'],resolve)
        }
    },
    methods: {
        ...mapActions([
            'search'
        ]),
        // callback(responseData) {
        //     this.$store.commit('resetListData', responseData);
        // },
        searchClick(condition) {
            this.search(condition);
        },
        newEdit() {
            alert("new");
        }
    }
};
</script>
<style scoped>
.searchbar {
    width: 200px;
}

.datatable {
    margin-top: 10px;
}
</style>

