if (isNaN(process.argv[2])) console.log("Missing size")
else {
  for (i=0;i<process.argv[2];i++) console.log("X".repeat(process.argv[2]));
}
