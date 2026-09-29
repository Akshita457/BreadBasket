import React, { useState } from "react";

function DonateFood({ onBack }) {

  const [formData, setFormData] = useState({
    foodName: "",
    category: "",
    quantity: "",
    unit: "Meals",
    description: "",
    location: "",
    preparedDate: "",
    expiryDate: "",
    contact: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Donation Data:", formData);

    setMessage(
      "Your food donation has been submitted successfully! ❤️"
    );

    setFormData({
      foodName: "",
      category: "",
      quantity: "",
      unit: "Meals",
      description: "",
      location: "",
      preparedDate: "",
      expiryDate: "",
      contact: "",
    });

  };


  return (

    <div className="donate-food-page">

      {/* Header */}

      <div className="donate-food-header">

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>

        <div>
          <p className="donate-small-title">
            FOOD DONATION
          </p>

          <h1>Donate Food</h1>

          <p>
            Share surplus food with people who need it.
          </p>
        </div>

      </div>


      {/* Form */}

      <div className="donate-food-card">

        <form onSubmit={handleSubmit}>

          {/* Food Information */}

          <div className="form-section">

            <h2>Food Information</h2>

            <p>
              Tell us about the food you would like to donate.
            </p>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Food Name *
                </label>

                <input
                  type="text"
                  name="foodName"
                  placeholder="e.g. Vegetable Biryani"
                  value={formData.foodName}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Category *
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select category
                  </option>

                  <option value="Cooked">
                    Cooked Food
                  </option>

                  <option value="Bakery">
                    Bakery
                  </option>

                  <option value="Fruits">
                    Fruits
                  </option>

                  <option value="Packaged">
                    Packaged Food
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Quantity *
                </label>

                <input
                  type="number"
                  name="quantity"
                  min="1"
                  placeholder="e.g. 25"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Unit *
                </label>

                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                >

                  <option value="Meals">
                    Meals
                  </option>

                  <option value="Boxes">
                    Boxes
                  </option>

                  <option value="Kg">
                    Kg
                  </option>

                  <option value="Packets">
                    Packets
                  </option>

                  <option value="Items">
                    Items
                  </option>

                </select>

              </div>

            </div>


            <div className="form-group">

              <label>
                Description *
              </label>

              <textarea
                name="description"
                rows="4"
                placeholder="Describe the food, ingredients, packaging, etc."
                value={formData.description}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Pickup Information */}

          <div className="form-section">

            <h2>Pickup Information</h2>

            <p>
              Help the NGO or volunteer know where and when
              the food can be collected.
            </p>


            <div className="form-group">

              <label>
                Pickup Location *
              </label>

              <input
                type="text"
                name="location"
                placeholder="Enter pickup address"
                value={formData.location}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Contact Number *
              </label>

              <input
                type="tel"
                name="contact"
                placeholder="Enter contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Dates */}

          <div className="form-section">

            <h2>Food Timing</h2>

            <div className="form-grid">

              <div className="form-group">

                <label>
                  Prepared Date & Time *
                </label>

                <input
                  type="datetime-local"
                  name="preparedDate"
                  value={formData.preparedDate}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Best Before *
                </label>

                <input
                  type="datetime-local"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>


          {/* Image */}

          <div className="form-section">

            <h2>Food Image</h2>

            <p>
              Adding an image helps NGOs understand the donation.
            </p>

            <input
              type="file"
              accept="image/*"
              className="food-image-input"
            />

          </div>


          {/* Message */}

          {message && (

            <div className="donation-success">
              {message}
            </div>

          )}


          {/* Buttons */}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={onBack}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-donation-button"
            >
              🍱 Submit Donation
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default DonateFood;