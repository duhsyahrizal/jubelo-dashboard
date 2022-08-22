<template>
  <div name="transaction-history">
    <div name="title" class="mb-8">
      <div class="d-flex justify-space-between">
        <div class="text-h5 font-weight-bold">Transaction History</div>
        <v-btn icon color="pink">
          <div>
            <v-img :src="icons.Option" width="24"></v-img>
          </div>
        </v-btn>
      </div>
    </div>
    <div class="custom-rounded white pa-4">
      <v-simple-table>
        <template v-slot:default>
          <thead class="custom-transaction-thead">
            <tr>
              <th class="text-left remove-border">Payment Number</th>
              <th class="text-left remove-border">Amount</th>
              <th class="text-center remove-border">Status</th>
            </tr>
          </thead>
          <tbody class="custom-transaction-tbody">
            <tr v-for="item in transaction" :key="item.paymentNumber">
              <td class="text-left remove-border">
                <v-list two-line class="transparent">
                  <v-list-item>
                    <div class="image-user-container mr-4">
                      <v-img :src="img.Success"></v-img>
                    </div>

                    <v-list-item-content>
                      <v-list-item-title class="pb-1">
                        <div class="text-left text-body2 font-weight-bold">
                          Payment From
                          <span class="primary--text">
                            {{ item.paymentNumber }}
                          </span>
                        </div>
                      </v-list-item-title>

                      <v-list-item-subtitle class="text-left"
                        >Today, 10:30 Am</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </td>
              <td class="text-left remove-border">
                <div class="text-body2 font-weight-bold">
                  {{ item.amount }}
                </div>
              </td>
              <td class="remove-border">
                <div
                  class="text-center rounded-lg green--text px-1 py-1 green lighten-5"
                  v-if="item.status == 'Completed'"
                >
                  {{ item.status }}
                </div>
                <div
                  class="text-center rounded-lg red--text px-1 py-1 red lighten-5"
                  v-if="item.status == 'Declined'"
                >
                  {{ item.status }}
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <div class="transaction-btn-container pa-4 pt-5">
        <v-btn
          outlined
          color="primary"
          class="white--text custom-rounded px-6 py-4"
          block
        >
          View all transactions
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Option from "@/assets/icons/Option.png";
import MessageBlue from "@/assets/icons/Message-Blue.png";
import Avatar from "@/assets/images/Avatar.png";
import Success from "@/assets/icons/Success.png";

export default {
  name: "TransactionHistory",

  data: () => ({
    icons: { Option: Option },
    img: {
      Avatar: Avatar,
      MessageBlue: MessageBlue,
      Success: Success,
    },
    transaction: [
      {
        paymentNumber: "#888888",
        amount: "+ $650.00",
        status: "Completed",
      },
      {
        paymentNumber: "#666666",
        amount: "- $250.00",
        status: "Completed",
      },
      {
        paymentNumber: "#999999",
        amount: "+ $128.00",
        status: "Declined",
      },
    ],
  }),
};
</script>

<style>
.custom-rounded {
  border-radius: 16px !important;
}

.image-user-container {
  width: 48px;
}

.icon-message-container {
  width: 20px;
}

.transaction-btn-container .v-btn {
  text-transform: none;
  padding: 24px !important;
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}

.custom-transaction-thead {
  background: rgba(245, 181, 68, 0.1);
}

.custom-transaction-thead th:first-child {
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}

.custom-transaction-thead th:last-child {
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}

.custom-transaction-thead th {
  font-size: 14px !important;
  padding: 24px !important;
  color: #091b3d !important;
}

.remove-border {
  border: none !important;
}

.custom-transaction-tbody td {
  max-width: 250px;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}
</style>
