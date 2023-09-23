<template>
  <div
    @click="checkClick"
    ref="invoiceWrap"
    class="invoice-wrap flex flex-column"
  >
    <form @submit.prevent="submitForm" class="invoiceContent">
      <h1>New Invoice</h1>

      <!-- bill from -->
      <div class="bill-from flex flex-column">
        <h4>Bill From</h4>
        <!-- biller street address -->
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input
            required
            type="text"
            id="billerStreetAddress"
            v-model="billerStreetAddress"
          />
        </div>
        <!-- 3 inputs in a row -->
        <div class="location-details flex">
          <!-- billerCity -->
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input required type="text" id="billerCity" v-model="billerCity" />
          </div>
          <!-- billerZipCode -->
          <div class="input flex flex-column">
            <label for="billerZipCode">ZIP Code</label>
            <input
              required
              type="text"
              id="billerZipCode"
              v-model="billerZipCode"
            />
          </div>
          <!-- billerCountry -->
          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input
              required
              type="text"
              id="billerCountry"
              v-model="billerCountry"
            />
          </div>
        </div>
      </div>

      <!-- bill to -->
      <div class="bill-to flex flex-to">
        <h4>Bill To</h4>
        <!-- client name -->
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input required type="text" id="clientName" v-model="clientName" />
        </div>
        <!-- client email -->
        <div class="input flex flex-column">
          <label for="clientEmail">Client's Email</label>
          <input required type="text" id="clientEmail" v-model="clientEmail" />
        </div>
        <!-- client Street Address -->
        <div class="input flex flex-column">
          <label for="clientStreetAddress">Client's Street Address</label>
          <input
            required
            type="text"
            id="clientStreetAddress"
            v-model="clientStreetAddress"
          />
        </div>
        <!-- 3 clients inputs in a row -->
        <div class="location-details flex">
          <!-- billerCity -->
          <div class="input flex flex-column">
            <label for="clientCity">CLient's City</label>
            <input required type="text" id="clientCity" v-model="clientCity" />
          </div>
          <!-- billerZipCode -->
          <div class="input flex flex-column">
            <label for="clientZipCode">Client's ZIP Code</label>
            <input
              required
              type="text"
              id="clientZipCode"
              v-model="clientZipCode"
            />
          </div>
          <!-- billerCountry -->
          <div class="input flex flex-column">
            <label for="clientCountry">client's Country</label>
            <input
              required
              type="text"
              id="clientCountry"
              v-model="clientCountry"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InvoiceModalComponent",
  data() {
    return {
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      docId: null,
      loading: null,
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
    };
  },
};
</script>

<style></style>
