const posmodel = require("../models/posmodel");


const postposdata = async (req, res) => {
    // console.log("req.body", req.body.formDataArray);
    //console.log("time", req.body.time);

  const arraydata = req.body.formDataArray;
  console.log("arraydata",arraydata)
  try {
      
     for (const dataItem of arraydata) {
            const addingdata = new posmodel(dataItem);
            const savedData = await addingdata.save();
          
        }

        // const addingdata = new posmodel(req.body);
        // const insert = await addingdata.save();

        const sortedData = await posmodel.find({}).sort({ time: 1 });

        const sortedDataWithInvoiceId = sortedData.map(entry => ({
            ...entry.toObject(),
            invoiceId: generateInvoiceId(),
        }));

       // console.log("sortedDataWithInvoiceId", sortedDataWithInvoiceId);

        await posmodel.deleteMany({}); 

        try {
            await posmodel.insertMany(sortedDataWithInvoiceId);
          ///  console.log("Sorted and saved data to posmodel:", sortedDataWithInvoiceId);
        } catch (insertError) {
            console.error("Error inserting documents with invoiceId:", insertError);
            throw insertError; 
        }

        res.status(200).send({ formdata: sortedDataWithInvoiceId });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Something went wrong" });
    }
};


let invoiceCounter = 1000; 

function generateInvoiceId() {
    const invoiceId = String(invoiceCounter).padStart(4, '0');

    invoiceCounter++;

    return invoiceId;
}




const getposdata = async (req, res) => {
  try {
    const finddata = await posmodel.find({});
   // console.log("finddata", finddata);
    res.status(200).send( finddata   );
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = { postposdata, getposdata };
