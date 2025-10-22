import Link from "next/link";

import SectionTitle from "@/components/SectionTitle";
import ArticleLayout from "@/components/ArticleLayout";

function TermsOfUsePage() {
  // Returned JSX
  return (
    <ArticleLayout>
      <SectionTitle>Terms of use</SectionTitle>
      <p>
        Welcome to <strong>NextBlogs</strong> (“we”, “our”, or “us”). By
        accessing or using NextBlogs you agree to be bound by these Terms of
        Use. If you do not agree, please do not use the platform.
      </p>

      <SectionTitle as="h2">Eligibility</SectionTitle>
      <p>
        You must be at least 13 years old to use NextBlogs. By registering, you
        represent and warrant that the information you provide is accurate and
        complete.
      </p>

      <SectionTitle as="h2">User Accounts</SectionTitle>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activity that occurs under your account. Notify
        us immediately of any unauthorized use or security breach.
      </p>

      <SectionTitle as="h2">User Content</SectionTitle>
      <p>
        You retain ownership of the content you create and publish on NextBlogs.
        By posting content on the platform you grant NextBlogs a non-exclusive,
        royalty-free, worldwide license to host, display, reproduce, and
        distribute that content within the service for the purpose of operating
        and promoting the platform.
      </p>
      <p>
        You agree not to publish content that is unlawful, defamatory,
        pornographic, hateful, harassing, or otherwise violates applicable law
        or third-party rights (including intellectual property rights).
      </p>

      <SectionTitle as="h2">Acceptable Use</SectionTitle>
      <p>You must not:</p>
      <ul>
        <li>
          Use the platform for spam, phishing, or unsolicited commercial
          messages;
        </li>
        <li>Interfere with or disrupt the service, servers, or networks;</li>
        <li>
          Attempt to reverse-engineer, copy, or resell the platform or its
          components;
        </li>
        <li>
          Impersonate another person or misrepresent your affiliation with any
          person or organization.
        </li>
      </ul>

      <SectionTitle as="h2">Moderation and Removal</SectionTitle>
      <p>
        We reserve the right, but are not obligated, to remove or restrict
        access to content that violates these Terms or is otherwise
        objectionable. We may suspend or terminate accounts at our discretion
        for violations.
      </p>

      <SectionTitle as="h2">Privacy</SectionTitle>
      <p>
        Our{" "}
        <Link href="/privacy" className="link-primary">
          Privacy Policy
        </Link>{" "}
        explains how we collect, use, and share personal information. By using
        NextBlogs you consent to that collection and processing.
      </p>

      <SectionTitle as="h2">Third-Party Services</SectionTitle>
      <p>
        NextBlogs may integrate with third-party services (e.g., authentication,
        analytics, hosting). Those services are governed by their own terms and
        privacy policies; we are not responsible for their practices.
      </p>

      <SectionTitle as="h2">Disclaimers</SectionTitle>
      <p>
        NEXTBLOGS IS PROVIDED <em>AS IS</em> AND <em>AS AVAILABLE</em> WITHOUT
        WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE
        SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. USER-GENERATED
        CONTENT IS THE RESPONSIBILITY OF THE POSTING USER; WE DO NOT ENDORSE OR
        VERIFY IT.
      </p>

      <SectionTitle as="h2">Limitation of Liability</SectionTitle>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL NEXTBLOGS, ITS
        AFFILIATES, OR CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE
        SERVICE.
      </p>

      <SectionTitle as="h2">Changes to These Terms</SectionTitle>
      <p>
        We may update these Terms from time to time. We will post the updated
        Terms with a new “Last updated” date. Continued use of the service after
        changes constitutes acceptance of the revised Terms.
      </p>

      <SectionTitle as="h2">Governing Law</SectionTitle>
      <p>
        These Terms are governed by the laws of the applicable jurisdiction
        where NextBlogs operates, without regard to conflict-of-law principles.
      </p>

      <SectionTitle as="h3">Contact</SectionTitle>
      <p>
        For questions about these Terms, contact us at{" "}
        <a href="mailto:support@mail.app">support@mail.app</a>.
      </p>
    </ArticleLayout>
  );
}

export default TermsOfUsePage;
