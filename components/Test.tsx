import prisma from "@/utils/db"

async function Test() {

  const task = await prisma.user.create({data: {
    id: 123,
    clerkId: "kedfgj",
    email: "hello@hello.com",
    username: "Test",
    dateCreated: new Date(),
    displayName: "Test",
    gender: "Male",
    socials: []
  }})

  // Returned JSX
  return (
    <div>Test</div>
  )
}

export default Test
