<template>
    <div class="d-flex justify-content-between align-items-center bg-dark">
        <h1 class="text-danger">Boolflix</h1>
        <div class="search-bar">
            <div class="input-group input-group-sm mb-3">
                <button class="input-group-text justify-content-center bg-white">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            <input type="text" class="form-control" placeholder="Cerca" v-model.trim="filter" />
        </div>
    </div>
    </div>
    
</template>

<script>
export default {
    name: 'HeaderComponent'

}
</script>

<style lang="scss" scoped></style>