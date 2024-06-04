"use client";

import { useAccount, useWriteContract } from "wagmi";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/shared/ui/button";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { blocTicketsAbi } from "@/blockchain/abi/blocTickets-abi";
import { Header } from "@/components/header";

export default function CreateEventPage() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { isPending, error, writeContractAsync } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isConnected) {
      toast.error("Please connect your wallet");
      return;
    }
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    try {
      const dateObject = new Date(data.date as string);
      const dateInMilliseconds = dateObject.getTime();

      const hash = await writeContractAsync({
        address: "0xAc6EAbE774C25F984E3dB85d84FcE27b3A7247eB",
        abi: blocTicketsAbi,
        functionName: "createEvent",
        args: [
          data.name as string,
          data.venue as string,
          data.category as string,
          BigInt(dateInMilliseconds),
          data.time as string,
          data.price as string,
          BigInt(data.tickets as string),
          data.description as string,
        ],
      });
      if (hash) {
        console.log(hash);
        toast("Event has been created", {
          description: `${data.date} at ${data.time}`,
        });
        router.push("/my-events");
      }
    } catch (e) {
      console.log(e);
      toast.error("Failed to create event, try again.");
      return;
    }
  }

  // TODO add upload event banner/image

  return (
    <main className="flex flex-col ">
      <Header />
      <section className="mx-auto max-w-md space-y-6 px-4 py-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Create Event</h1>
          <p className="text-gray-500 ">
            Fill out the details to create a new event.
          </p>
        </div>

        <form onSubmit={submit} className="">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Event Name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="venue">Venue</Label>
              <Input id="venue" name="venue" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="time">Time</Label>
              <Input id="time" name="time" type="time" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="price">Price (cUSD)</Label>
              <Input id="price" name="price" type="number" step="0.01" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="tickets">Number of Tickets</Label>
              <Input id="tickets" name="tickets" type="number" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="name">Event Description</Label>
              <Textarea id="description" name="description" required />
            </div>
          </div>

          <Button disabled={isPending} className="mt-8 w-full" type="submit">
            {isPending ? "Creating..." : "Create Event"}
          </Button>
        </form>
      </section>
    </main>
  );
}
