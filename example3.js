// Sử dụng async/await để tránh callback hell và làm code dễ đọc

// getData(function(a) {
//   parseData(a, function(b) {
//     processData(b, function(c) {
//       displayData(c, function(d) {
//         console.log('Done');
//       });
//     });
//   });
// });

async function getDataAndProcess() {
  try {
    const data = await getData();
    const parsedData = await parseData(data);
    const processedData = await processData(parsedData);
    await displayData(processedData);
    console.log("Done");
  } catch (err) {
    console.log("Error");
  }
}
