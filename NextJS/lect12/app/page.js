// "use client"


export default function Home() {
  // console.log("The id is: ", process.env.ID)
  // console.log("The secret is: ", process.env.SECRET)
  return (
    <div>
          Hey this is home. The id is {process.env.NEXT_PUBLIC_ID} and secret is {process.env.SECRET} and name is {process.env.NAME}
      {/* use client if you want to use the code below  */}
       {/* Hey this is home. The id is {process.env.ID} and secret is {process.env.SECRET} and name is {process.env.NAME} */}
    </div>
  );
}