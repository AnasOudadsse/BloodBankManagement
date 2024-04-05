<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReportMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $reportPdf;
    public $donorName;

    public function __construct($reportPdf,  $donorName)
    {
        $this->reportPdf = $reportPdf;
        $this->donorName = $donorName;
    }

    public function build()
    {
        return $this->view('mail.test-email')
                    ->subject('Your Blood Analysis Repory')
                    ->with(['reportPdf' => $this->reportPdf, 'donorName' => $this->donorName]);
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [
            Attachment::fromPath($this->reportPdf)
        ];
    }
}
