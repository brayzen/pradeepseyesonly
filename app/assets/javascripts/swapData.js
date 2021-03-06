// For TEST purposes only, these are the Two data inputs per question:

$(document).ready(function(){
    var dataInput = { "SHI": { q1: "SHI",
                             q2: "SHI is a global provider of information technology products and services.",
                             q3: "As experts in volume licensing, SHI recognized the shifting landscape of software licensing and sought a solution that would help customers ease into the cloud through a more streamlined and flexible buying process.",
                             q4: "Previous licensing models required multiple tools and agreements, says Adam Aleksiuk, Homer Operations Manager at SHI.",
                             q5: "SHI sought a solution that would help customers ease into the cloud through a more streamlined and flexible buying process.",
                             q6: "The HPSA offers customers flexibility as they move to the cloud, helping them quickly add, remove, and transfer licenses at any time as their needs change.",
                             q7: "SHI used the HPSA to help a large construction company navigate a 2,000-seat purchase that included Homer",
                             q8: "Homer Products and Services Agreement (HPSA), the next generation of licensing that offers a single agreement for both online and on-premises solutions.",
                             q9: "The HPSA offers simple, flexible licensing where online services can be purchased and managed in one place. It makes our lives and our customers lives easier, says Blake Gollnick, Director of Homer Licensing at SHI.",
                             q10: "With a faster signing process, the HPSA helped SHI boost sales process efficiency by 20 percent, lowering the cost of sale and improving the customer experience.",
                             q11: "The HPSA is more automated than previous licensing options, helping us conduct business faster, says Heather Sheridan, Senior Manager and Licensing Project Manager at SHI. It's been hugely beneficial because we don't have to increase resources to handle greater volume.",
                             q12: "The HPSA management portal provides a single view of purchases. We see what the customers see, says Sheridan. We have similar walkthrough experiences, making it easier to guide customers and provide excellent service."},
                    "Raven + Lily": { q1: "Raven + Lily",
                                      q2: "Raven + Lily is a socially conscientious lifestyle brand that is dedicated to empowering impoverished women through design.",
                                      q3: "When they switched from a nonprofit model to a for-profit social enterprise, they needed to build a great website to showcase the brand, share their story and support their mission",
                                      q4: "Without a powerful online platform, Raven + Lily's online sales failed to get the traction they were seeing in their competitors.",
                                      q5: "We needed something that would be powerful because we had a big vision and wanted to grow and become a bigger company,¡ said Dickerson.",
                                      q6: "We wanted somebody that could grow with us, and Bigcommerce had that to offer.",
                                      q7: "Bigcommerce is an all-in-one, feature rich ecommerce platform that allows even the most novice of user to create a fully functional online store and sell both physical and digital products online.",
                                      q8: "Bigcommerce",
                                      q9: "",
                                      q10: "Raven + Lily was able to easily create a useful and beautiful store on the Bigcommerce platform with in-house design and resources. The result from 2012 to 2014, they saw 150% growth in their ecommerce sales.;Year-over-year sales have quadrupled;Online sales have increased 150% from 2012 to 2014;Opened flagship retail location in 2014;Currently employ over 800 at-risk women around the world",
                                      q11: "¡°Profit margins through our website sales are the best,¡ said Dickerson. There's only so much I can say on the tags that people receive from Raven + Lily or in a conversation¡¦ There's a story associated with every product, and our store has been an incredible way to showcase that.",
                                      q12: "",}
                   };

  //for testing purposes only: populate with TESTER Selected Data
  // Swap data
  $('#changeData').on('click', function(){
    var inputSelection = $('#data-selection').val();
    $('div.box textarea').each(function(element){
      id1 = this.id;
      id2 = '#' + id1;
      id3 = id1.toLowerCase().toString();
      $(id2).html(dataInput[inputSelection][id3]);
    })
  });
})
