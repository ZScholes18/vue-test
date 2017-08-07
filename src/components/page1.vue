<template>
    <div>
        <el-row>
            <el-col :span="24">
                <container class="f-cb">
                    <search-bar class="f-fr" placeholder="请输入名字" mutationName='resetListData' :callback="callback" />
                </container>
            </el-col>
        </el-row>
        <data-table>
    </div>
</template>
<script>
import { DataTable, SearchBar } from './index';
</script>
