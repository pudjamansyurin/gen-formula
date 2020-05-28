<template>
    <v-app id="inspire">
        <left-drawer></left-drawer>

        <top-bar></top-bar>

        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1"
                    ></v-data-table>
                </v-row>
            </v-container>
        </v-content>

        <v-btn
            bottom
            color="pink"
            dark
            fab
            fixed
            right
            @click="dialog = !dialog"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-title class="grey darken-2">
                    Create contact
                </v-card-title>
                <v-container>
                    <v-row class="mx-2">
                        <v-col
                            class="align-center justify-space-between"
                            cols="12"
                        >
                            <v-row align="center" class="mr-0">
                                <v-avatar size="40px" class="mx-3">
                                    <img
                                        src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                                        alt=""
                                    />
                                </v-avatar>
                                <v-text-field placeholder="Name"></v-text-field>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                prepend-icon="mdi-account-card-details-outline"
                                placeholder="Company"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                placeholder="Job title"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                prepend-icon="mdi-mail"
                                placeholder="Email"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                type="tel"
                                prepend-icon="mdi-phone"
                                placeholder="(000) 000 - 0000"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                prepend-icon="mdi-text"
                                placeholder="Notes"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-btn text color="primary">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dialog = false"
                        >Cancel</v-btn
                    >
                    <v-btn text @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
import LeftDrawer from "./components/LeftDrawer.vue";
import TopBar from "./components/TopBar.vue";

export default {
    name: "App",
    props: {
        source: String
    },
    components: {
        LeftDrawer,
        TopBar
    },
    data: () => ({
        headers: [
            {
                text: "Dessert (100g serving)",
                align: "start",
                sortable: false,
                value: "name"
            },
            { text: "Calories", value: "calories" },
            { text: "Fat (g)", value: "fat" },
            { text: "Carbs (g)", value: "carbs" },
            { text: "Protein (g)", value: "protein" },
            { text: "Iron (%)", value: "iron" }
        ],
        desserts: [
            {
                name: "Frozen Yogurt",
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: "1%"
            },
            {
                name: "Ice cream sandwich",
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: "1%"
            },
            {
                name: "Eclair",
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: "7%"
            },
            {
                name: "Cupcake",
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: "8%"
            },
            {
                name: "Gingerbread",
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: "16%"
            },
            {
                name: "Jelly bean",
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: "0%"
            },
            {
                name: "Lollipop",
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: "2%"
            },
            {
                name: "Honeycomb",
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: "45%"
            },
            {
                name: "Donut",
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: "22%"
            },
            {
                name: "KitKat",
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: "6%"
            }
        ],
        dialog: false
    })
};
</script>
