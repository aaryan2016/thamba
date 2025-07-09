"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// NOTE: These components are assumed to be from shadcn/ui.
// If not present, you can add them using:
// npx shadcn-ui@latest add button form input textarea
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const hireUsFormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters long.",
	}),
});

export default function HireUsForm() {
	const form = useForm<z.infer<typeof hireUsFormSchema>>({
		resolver: zodResolver(hireUsFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		},
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (values: z.infer<typeof hireUsFormSchema>) => {
		try {
			setIsSubmitting(true);
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			if (response.ok) {
				console.log("Form submitted successfully!");
				form.reset(); // Clear the form
				alert("Your message has been sent!");
			} else if (response.status === 429) {
				alert("Too many requests. Please try again later.");
			} else {
				console.error("Form submission failed.");
				alert("Failed to send your message. Please try again.");
			}
		} catch (error) {
			alert("Something went wrong. Please try again later");
			console.error("An error occurred during form submission:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="w-full max-w-3xl p-8 bg-[#939bfb]">
			<h1 className="text-4xl md:text-5xl font-extralight mb-2">Hire Us</h1>
			<p className="text-black mb-8">
				Have a project in mind? Let&apos;s talk.
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="flex flex-col md:flex-row gap-6">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel className="font-light">First Name</FormLabel>
									<FormControl>
										<Input
											className="bg-white"
											placeholder="e.g. Jane"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel className="font-light">Last Name</FormLabel>
									<FormControl>
										<Input
											className="bg-white"
											placeholder="e.g. Doe"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-light">Email</FormLabel>
								<FormControl>
									<Input
										className="bg-white"
										type="email"
										placeholder="your.email@example.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-light">Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Tell us about your dream..."
										className="resize-y min-h-[150px] bg-white"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-end">
						<Button
							type="submit"
							className="bg-blue-600 text-white hover:bg-blue-300"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Submitting..." : "Submit"}
						</Button>
					</div>
				</form>
			</Form>
		</section>
	);
}
