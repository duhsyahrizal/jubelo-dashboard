<template>
  <div name="new-customer">
    <div name="title" class="mb-8">
      <div class="d-flex justify-space-between">
        <div class="text-h5 font-weight-bold">New Customers</div>
        <v-btn icon color="pink">
          <div>
            <v-img :src="icons.Option" width="24"></v-img>
          </div>
        </v-btn>
      </div>
    </div>
    <div class="custom-rounded white pa-4">
      <v-list subheader two-line>
        <v-list-item v-for="folder in users" :key="folder.title" class="mb-5">
          <div class="image-user-container mr-4">
            <v-img :src="img.Avatar"></v-img>
          </div>

          <v-list-item-content>
            <v-list-item-title class="pb-1">
              <div class="text-left text-body2 font-weight-bold">
                {{ folder.title }}
              </div>
            </v-list-item-title>

            <v-list-item-subtitle
              v-text="folder.subtitle"
              class="text-left"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <div class="icon-message-container">
              <v-img :src="img.MessageBlue"></v-img>
            </div>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <div class="customer-btn-container pa-4 pt-2">
        <v-btn
          outlined
          color="primary"
          class="white--text custom-rounded px-6 py-4"
          block
        >
          View more customers
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Option from "@/assets/icons/Option.png";
import MessageBlue from "@/assets/icons/Message-Blue.png";
import Avatar from "@/assets/images/Avatar.png";

export default {
  name: "NewCustomers",

  data: () => ({
    icons: { Option: Option },
    img: {
      Avatar: Avatar,
      MessageBlue: MessageBlue,
    },
    users: [
      {
        title: "Lily Ortiz",
        subtitle: "@lilyortiz",
      },
      {
        title: "Tom Stone",
        subtitle: "@tomstn",
      },
      {
        title: "Issabella higgins",
        subtitle: "@issabellahggins",
      },
      {
        title: "Rossalie Bowman",
        subtitle: "@rossaliebowman",
      },
    ],
  }),
};
</script>

<style>
.custom-rounded {
  border-radius: 16px;
}

.image-user-container {
  width: 48px;
}

.icon-message-container {
  width: 20px;
}

.customer-btn-container .v-btn {
  text-transform: none;
  padding: 24px !important;
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}
</style>
