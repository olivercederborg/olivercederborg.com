import sgMail from '@sendgrid/mail'

export const sendEmail = async (data: {
	name: string
	email: string
	company: string
	message: string
}) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

	const { name, email, company, message } = data

	const emailToFrom = {
		to: 'hey@olivercederborg.com',
		from: 'hey@olivercederborg.com',
	}

	const content = {
		to: emailToFrom.to,
		from: emailToFrom.from,
		replyTo: email,
		subject: `New Message From: ${name}`,
		text: message,
		html: `<p><strong>Name: ${name}<br>
          Email: ${email}</strong>
          <br><br>
          Message: ${message}
          </p>`,
	}

	try {
		if (company) throw new Error('Bot detected, company name not allowed.')
		await sgMail.send(content)
	} catch (error: unknown) {
		throw new Error(error as unknown as string)
	}
}
