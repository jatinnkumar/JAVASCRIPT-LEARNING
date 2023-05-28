let a = "jatin";
a = undefined;
if (a != undefined) {
    throw new Error('This is not undefined');
} else {
    console.log('This is undefined');
}


try {
    console.log("We are inside try block...");
    ss
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log("Are you okay?");
} finally {
    console.log('This is statement written in finally block...');
}