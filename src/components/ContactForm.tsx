"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// NOTE: These components are assumed to be from shadcn/ui.
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

// 1. Update the schema to include the hCaptcha token
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
	// Add hCaptcha token validation
	hCaptchaToken: z
		.string()
		.min(1, { message: "Please complete the hCaptcha." }),
});

export default function HireUsForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	// 2. Create a ref for the hCaptcha component
	const captchaRef = useRef<HCaptcha>(null);

	const form = useForm<z.infer<typeof hireUsFormSchema>>({
		resolver: zodResolver(hireUsFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
			hCaptchaToken: "", // Add default value for the token
		},
	});

	const onSubmit = async (values: z.infer<typeof hireUsFormSchema>) => {
		try {
			setIsSubmitting(true);
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// The hCaptcha token is now automatically included in `values`
				body: JSON.stringify(values),
			});

			if (response.ok) {
				console.log("Form submitted successfully!");
				form.reset(); // Clear the form
				// 6. Reset the hCaptcha widget on successful submission
				captchaRef.current?.resetCaptcha();
				alert("Your message has been sent!");
			} else {
				const errorData = await response.json();
				// Reset captcha on failure as well, so user can retry
				captchaRef.current?.resetCaptcha();
				form.setValue("hCaptchaToken", ""); // Clear the token from form state

				console.error("Form submission failed:", errorData.message);
				alert(
					errorData.message || "Failed to send your message. Please try again.",
				);
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
			<p className="text-black mb-8">Have a project in mind? Let's talk.</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					{/* ... (Your other FormFields for firstName, lastName, email, message remain unchanged) ... */}
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

					{/* 3. Add the HCaptcha component to your form */}
					<div className="space-y-2">
						<HCaptcha
							sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
							onVerify={(token) => {
								// 4. Set the token value in the form state
								form.setValue("hCaptchaToken", token);
								// Manually clear the error for this field
								form.clearErrors("hCaptchaToken");
							}}
							onExpire={() => {
								// Reset token if it expires
								form.setValue("hCaptchaToken", "");
							}}
							ref={captchaRef}
						/>
						{/* 5. Display validation errors for hCaptcha */}
						{form.formState.errors.hCaptchaToken && (
							<p className="text-sm font-medium text-destructive">
								{form.formState.errors.hCaptchaToken.message}
							</p>
						)}
					</div>

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
