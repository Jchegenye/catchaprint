<template >
  <div>
    <vue-headful v-bind:title="this.$root.bloginfo.name+' | Bookmark'" />

    <div id="wrapper" class="toggled">
      <!-- Sidebar -->
      <SideBar />
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <TopBar />

            <div id="otherpages">
              <b-form class="row order needs-validation" novalidate>
                <div class="col-md-6">
                  <!-- shopping-cart data -->
                  <h4 class="mb-4">Billing details</h4>

                  <div class="form-row">
                    <b-form-group class="col-md-6">
                      <label for="first_name">First Name</label>
                      <b-form-input
                        type="text"
                        class="form-control"
                        id="first_name"
                        name="first_name"
                        required
                      ></b-form-input>

                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please provide your first name.</div>
                    </b-form-group>
                    <b-form-group class="col-md-6">
                      <label for="last_name">Last Name</label>
                      <b-form-input
                        type="text"
                        class="form-control"
                        id="last_name"
                        name="last_name"
                        required
                      ></b-form-input>

                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please provide your last name.</div>
                    </b-form-group>
                  </div>
                  <div class="form-row">
                    <b-form-group class="col-md-8">
                      <label for="email">E-mail</label>
                      <b-form-input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        required
                      ></b-form-input>

                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please provide a valid email address.</div>
                    </b-form-group>
                    <b-form-group class="col-md-4">
                      <label for="phone">Phone Number</label>
                      <b-form-input
                        type="text"
                        class="form-control"
                        id="phone"
                        name="phone"
                        min="10"
                        max="12"
                        required
                      ></b-form-input>

                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please provide a valid phone number.</div>
                    </b-form-group>
                  </div>
                  <div class="form-row">
                    <b-form-group class="col-md-7">
                      <label for="address_2">Address</label>
                      <b-form-input
                        type="text"
                        class="form-control"
                        id="address_2"
                        placeholder="i.e. 1234"
                        name="address_2"
                        required
                      ></b-form-input>

                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please provide a valid address.</div>
                    </b-form-group>
                    <b-form-group class="col-md-5">
                      <label for="country">Country</label>
                      <b-form-input
                        type="text"
                        class="form-control"
                        id="country"
                        placeholder="i.e. Kenya"
                        name="country"
                        required
                      ></b-form-input>

                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please provide a valid country.</div>
                    </b-form-group>
                  </div>
                  <div class="form-row">
                    <b-form-group class="col-md-6">
                      <label for="city">City</label>
                      <b-form-input
                        type="text"
                        class="form-control"
                        id="city"
                        placeholder="i.e. Nairobi"
                        name="city"
                        required
                      ></b-form-input>

                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please provide a valid city.</div>
                    </b-form-group>
                    <b-form-group class="col-md-4">
                      <label for="state">County</label>
                      <b-form-input
                        type="text"
                        class="form-control"
                        id="state"
                        placeholder="i.e. Kiambu"
                        name="state"
                        required
                      ></b-form-input>

                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please provide a valid county.</div>
                    </b-form-group>
                    <b-form-group class="col-md-2">
                      <label for="postcode">Post Code</label>
                      <b-form-input
                        type="text"
                        class="form-control"
                        id="postcode"
                        placeholder="i.e. 01000"
                        name="postcode"
                      ></b-form-input>
                    </b-form-group>
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value
                          id="invalidCheck"
                          required
                        />
                        <label
                          class="form-check-label"
                          for="invalidCheck"
                        >Agree to terms and conditions</label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <h4 class="mb-4">Your order</h4>
                  <table id="cart" class="table table-hover table-condensed">
                    <thead>
                      <tr>
                        <th class="border-top-0">Product</th>
                        <th class="text-center border-top-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border-0">Scubapro 10 litre 232 bar cylinder – single valve × 2</td>
                        <td class="text-center border-0">2</td>
                      </tr>
                      <tr>
                        <td class="border-top-0 border-bottom-1">Lowepro Slingshot Edge 250 AW × 1</td>
                        <td class="text-center border-0">1</td>
                      </tr>
                      <tr>
                        <td class="text-right border-0">
                          <strong>Total</strong>
                        </td>
                        <td class="text-center">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="col-md-12 text-right">
                  <button type="submit" class="btn">Place Order</button>
                </div>
              </b-form>
              <!-- /shopping-cart data -->
            </div>
          </div>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/Partials/TopBar.vue";
import SideBar from "@/components/Partials/SideBar.vue";
import { validationMixin } from "vuelidate";
import { required, minLength, between, email } from "vuelidate/lib/validators";

export default {
  name: "checkout",
  components: {
    TopBar,
    SideBar
  }
};
</script>