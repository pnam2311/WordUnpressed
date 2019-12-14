<template>
    <div>
        <Title :title="title"/>
        <v-card>
            <p>
                This is a test card
            </p>
        </v-card>   
    </div>
</template>

<script>
import Title from '../components/Title'
export default {
    data: function (){
        return {
            title: 'Home'
        }
    },
    components: {
        Title
    }
}
</script>