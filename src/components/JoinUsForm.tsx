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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const positions = [
	"Select a Position",
	"Frontend Developer",
	"Backend Developer",
	"UI/UX Designer",
	"Project Manager",
	"Other",
] as const;
const joinUsFormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	phone: z.string().regex(/^[\d\s()+-]{7,15}$/, {
		message: "Please enter a valid phone number.",
	}),
	position: z.enum(positions).optional(),
	cvUrl: z
		.string()
		.url({ message: "Please enter a valid CV URL." })
		.optional()
		.or(z.literal("")),
	portfolioUrl: z
		.string()
		.url({ message: "Please enter a valid portfolio URL." })
		.optional()
		.or(z.literal("")),
	comments: z
		.string()
		.min(10, {
			message: "Message must be at least 10 characters long.",
		})
		.optional()
		.or(z.literal("")),
});

function JoinUsForm() {
	const form = useForm<z.infer<typeof joinUsFormSchema>>({
		resolver: zodResolver(joinUsFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			position: "Other",
			cvUrl: "",
			portfolioUrl: "",
			comments: "",
		},
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submissionError, setSubmissionError] = useState<string | null>(null);
	const [submissionSuccess, setSubmissionSuccess] = useState(false);

	const onSubmit = async (values: z.infer<typeof joinUsFormSchema>) => {
		setIsSubmitting(true);
		setSubmissionError(null);
		setSubmissionSuccess(false);
		try {
			const response = await fetch("/api/hire", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			if (response.ok) {
				console.log("Form submitted successfully!");
				setSubmissionSuccess(true);
				form.reset();
			} else {
				const errorData = await response.json();
				setSubmissionError(
					errorData.error || "An unexpected error occurred during submission.",
				);
			}
		} catch (error: any) {
			console.error("Submission failed:", error);
			setSubmissionError(
				error.message || "An unexpected error occurred during submission.",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="flex flex-col">
						{/* First Name and Last Name */}
						<div className="flex flex-col md:flex-row gap-6 mb-13">
							{/* First Name */}
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel className="font-helvetica-light text-lg uppercase">
											First Name
										</FormLabel>
										<FormControl>
											<input
												type="text"
												className="p-3 font-helvetica-light border-b border-black rounded-none focus-visible:ring-0 focus-visible:outline-none"
												placeholder="e.g. John"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Last Name */}
							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel className="font-helvetica-light text-lg uppercase">
											Last Name
										</FormLabel>
										<FormControl>
											<input
												type="text"
												className="p-3 font-helvetica-light  border-b border-black rounded-none focus-visible:ring-0 focus-visible:outline-none"
												placeholder="e.g. Doe"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* Email and Phone */}
						<div className="flex flex-col md:flex-row gap-6 mb-13">
							{/* Email */}
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel className="font-helvetica-light text-lg uppercase">
											Email
										</FormLabel>
										<FormControl>
											<input
												type="text"
												className="p-3 font-helvetica-light border-b border-black rounded-none focus-visible:ring-0 focus-visible:outline-none"
												placeholder="e.g. johndoe@example.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Phone */}
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel className="font-helvetica-light text-lg uppercase">
											Phone
										</FormLabel>
										<FormControl>
											<input
												type="text"
												className="p-3 font-helvetica-light  border-b border-black rounded-none focus-visible:ring-0 focus-visible:outline-none"
												placeholder="e.g. +919876543210"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* Position */}
						<div className="flex flex-col md:flex-row gap-6 mb-13">
							<FormField
								control={form.control}
								name="position"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel className="font-helvetica-light text-lg uppercase">
											Position
										</FormLabel>
										<FormControl>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<SelectTrigger className="mt-3 shadow-none font-helvetica-light w-full rounded-none border-0 border-b border-black focus-visible:ring-0 focus-visible:outline-none">
													<SelectValue placeholder="Select a Position" />
												</SelectTrigger>
												<SelectContent className="bg-[#b7c7ff] rounded-none border border-black focus-visible:ring-0 focus-visible:outline-none">
													{positions.map((pos) => (
														<SelectItem key={pos} value={pos}>
															{pos}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* CV url and Portfolio Url */}
						<div className="flex flex-col md:flex-row gap-6 mb-13">
							{/* CV URL */}
							<FormField
								control={form.control}
								name="cvUrl"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel className="font-helvetica-light text-lg uppercase">
											CV Url
										</FormLabel>
										<FormControl>
											<input
												type="text"
												className="p-3 font-helvetica-light  border-b border-black rounded-none focus-visible:ring-0 focus-visible:outline-none"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Portfolio Url */}
							<FormField
								control={form.control}
								name="portfolioUrl"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel className="font-helvetica-light text-lg uppercase">
											Portfolio Url
										</FormLabel>
										<FormControl>
											<input
												type="text"
												className="p-3 font-helvetica-light  border-b border-black rounded-none focus-visible:ring-0 focus-visible:outline-none"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* Comments */}
						<div className="flex flex-col md:flex-row gap-6 mb-13">
							<FormField
								control={form.control}
								name="comments"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel className="font-helvetica-light text-lg uppercase">
											Any Comments?
										</FormLabel>
										<FormControl>
											<Textarea
												className="mt-3 font-helvetica-light shadow-none resize-none h-24 overflow-y-auto border-0 border-b border-black rounded-none focus-visible:ring-0 focus-visible:outline-none focus-visible:border-black"
												placeholder="Tell us a bit about yourself"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* Submit */}
						<div className="Submit">
							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full rounded-none py-5.5 px-12 text-base font-helvetica-light uppercase hover:border hover:border-black hover:bg-transparent hover:text-black sm:text-md md:text-lg md:w-auto md:px-28"
							>
								{isSubmitting ? "Submitting..." : "Submit"}
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</div>
	);
}

export default JoinUsForm;
