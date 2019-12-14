<template>
    <div>
        <Title :title="title"/>
        <Carousel />
        <v-row class="pa-0 ma-0" cols=12>
            <v-col md=4>
                <v-card
                :hover="true"
                >
                    <v-card-title>Title</v-card-title>
                    <v-card-subtitle>This is card content</v-card-subtitle>
                    <v-card-text>
                        This is a test card
                    </v-card-text>
                </v-card>   
            </v-col>
            <v-col md=8>
                <v-card class="mb-2" v-for="i in 10" v-bind:key="i">
                    <v-card-title>Title</v-card-title>
                    <v-card-subtitle>This is card content</v-card-subtitle>
                    <v-card-text>
                        This is a test card
                        <br>
                        This is a test card
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Title from '../components/Title'
import Carousel from '../components/Carousel'
export default {
    data: function (){
        return {
            title: 'Home'
        }
    },
    components: {
        Title,
        Carousel
    }
}
</script>