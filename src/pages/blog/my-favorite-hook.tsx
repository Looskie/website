import Link from "next/link";
import BlogPageWrapper from "../../components/BlogPageWrapper";
import { BLOG_POSTS } from "../../utils/constants";

const BLOG_POST_METADATA = BLOG_POSTS.find(
  (post) => post.slug === "my-favorite-hook"
)!;

export default function MyFavoriteHook() {
  return (
    <BlogPageWrapper blog={BLOG_POST_METADATA}>
      <h2 id="scenario">The Scenario</h2>
      <p>
        Whenever you're creating reusable React components I always think about
        how I can make the component as flexible as possible. When creating
        these reusable components, we often find ourselves in an awkward scoping
        issue, where we need sort of state or handler functions to be accessible
        in the parent from the component.
      </p>

      <h3>Take This For Example</h3>
      <p>
        You have an <code>EmailVerification</code> component, this component is
        responsible for verifying an email address, from the simple input to the
        submit button and everything in-between.
      </p>

      <p>The definition of this would look a little something like:</p>
      <pre>
        <code>
          {`// components/EmailVerification.tsx
import { useState } from "react";

export const EmailVerification = ({ blah, blah, blah }:SomePropDefinition) => {
  const [code, setCode] = useState("");

  const verify = () => {
    ... handle verification logic
  }

  const resendCode = () => {
    ... handle resend code logic
  }

  return (
    <form>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={verify}>Verify</button>
      <button onClick={resendCode}>Resend Code</button>
    </form>
  );
}`}
        </code>
      </pre>

      <p>
        When using this component, it gets a bit tedious. Lets say, you want to
        add an initial value, add a callback to the submit button, reset the
        form, etc. How can we tackle this very common issue?
      </p>
      <h2 id="prop-drilling">Lift State & Prop Drill</h2>
      <p>
        While there are a few solutions to this exact situation, most would just
        lift the state of the component and prop drill. While this works, it
        gets ugly VERY fast. I typically stay away from prop drilling as much as
        possible as well.
      </p>
      <p>
        Okay... so how can we interact with this component's state and functions
        WITHOUT lifting state & prop drilling?
      </p>
      <h2>The useImperativeHandler Hook</h2>
      <p>
        My favorite hook of all time. The useImperativeHandler hook. This hook
        allows you to interact with your component from the parent through a
        reference. Which will help us achieve the same goal without lifting
        state or prop drilling.
      </p>
      <h3>How Does It Look?</h3>
      <p>Beautiful. Take a look yourself.</p>
      <pre>
        <code>
          {`// components/EmailVerification.tsx
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type EmailVerificationProps = {
  ...your email props
}

// Notice this export, so we can use the ref type in the parent
export type EmailVerificationRef = {
  verify: () => void;
  setCode: (code: string) => void;
  resendCode: () => void;
};


export const EmailVerification = forwardRef<EmailVerificationRef, EmailVerificationProps>((props, ref) => {
  const [code, setCode] = useState("");

  const verify = () => {
    ... handle verification logic
  }

  const resendCode = () => {
    ... handle resend code logic
  }

  useImperativeHandle(ref, () => ({
    verify,
    setCode,
    resendCode,
  }));

  return (
    <form>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={verify}>Verify</button>
      <button onClick={resendCode}>Resend Code</button>
    </form>
  );
});

EmailVerification.displayName = "EmailVerificationComponent";`}
        </code>
      </pre>

      <p>You would use it in the parent like so</p>
      <pre>
        <code>
          {`// pages/auth/email.tsx
import { useRef } from "react";
import { EmailVerification, type EmailVerificationRef } from "../../components/EmailVerification";

export default function EmailPage() {
  const emailVerificationRef = useRef<EmailVerificationRef | null>(null);
  const initialCode = useInitialEmailVerificationCode();
  // ^ This is not implemented, but pretend that it fetches an initial code from the query parameters.

  return (
    <div>
      <EmailVerification ref={emailVerificationRef} />
      <button onClick={() => emailVerificationRef.current?.verify()}>
        Custom Verify Email Button
      </button>

      <button onClick={() => emailVerificationRef.current?.resendCode()}>
        Resend verification code???
      </button>
    </div>
  );
}`}
        </code>
      </pre>
      <p>
        Clean and reusable, exactly what I strive for when creating React
        components.
      </p>
      <h2>Conclusion</h2>
      <p>
        I hope you enjoyed my small blog on this niche react hook. While
        possibly boring to some, I absolutely love this hook and it's helped me
        create some of the cleanest components I've ever written.
      </p>
    </BlogPageWrapper>
  );
}
