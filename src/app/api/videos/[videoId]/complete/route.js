export async function POST(request, { params }) {
  const { videoId } = params;

  console.log(`Video ${videoId} completed`);

  return new Response(
    JSON.stringify({ message: "Completion recorded" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}