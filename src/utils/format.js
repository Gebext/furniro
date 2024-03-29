export function formatToRupiah(price) {
  // Convert the price to a string and split it into an array
  const priceArray = price.toString().split("");

  // Initialize variables
  let rupiah = "";
  let count = 0;

  for (let i = priceArray.length - 1; i >= 0; i--) {
    // Append each digit to the rupiah string
    rupiah = priceArray[i] + rupiah;
    // Increment the count
    count++;
    // Add a dot separator after every 3 digits
    if (count % 3 === 0 && i !== 0) {
      rupiah = "." + rupiah;
    }
  }

  // Return the formatted rupiah string
  return "Rp " + rupiah;
}
