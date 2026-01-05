import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialShare from "@/components/ui/SocialShare";
import NewsletterSignup from "@/components/forms/NewsletterSignup";

// Sample articles data - in production this would come from a database
const articles = [
  {
    id: 1,
    title: "The Leadership Crisis Nobody Talks About",
    excerpt: "Why the most urgent challenge facing organizations isn't strategy or technology—it's the erosion of human connection in how we lead.",
    category: "Leadership",
    readTime: "8 min",
    date: "2025-12-15",
    content: `
# The Leadership Crisis Nobody Talks About

In boardrooms across the world, leaders are wrestling with unprecedented challenges: digital transformation, hybrid work models, talent retention, and geopolitical uncertainty. Yet beneath these visible crises lies a deeper, more insidious problem that few dare to name: **the erosion of human connection in leadership**.

## The Problem We're Not Discussing

We've become so obsessed with efficiency, metrics, and scalability that we've forgotten what leadership is actually for. Leadership isn't about managing resources or optimizing outcomes—it's about creating the conditions for human beings to thrive, contribute, and find meaning in their work.

When leaders lose sight of this fundamental truth, something breaks. Teams become transactional. Innovation stalls. The best people leave. And organizations wonder why their engagement scores keep declining despite all the right initiatives.

## What Umunthu Reveals

The Bantu concept of *Umunthu* (or Ubuntu in other African languages) offers a radical reframe: **"I am because we are."** This isn't just a philosophical nicety—it's a leadership principle with profound implications.

Umunthu tells us that:
- Your success as a leader is inseparable from the flourishing of those you lead
- Power isn't something you hold over people, but something you generate together
- The measure of great leadership isn't what you achieve, but who people become in your presence

## A Different Way Forward

Imagine leadership development that doesn't start with competencies and frameworks, but with the question: *How do we cultivate leaders who make others feel more fully human?*

This requires courage. It means:
- Leading with vulnerability instead of performing invincibility
- Prioritizing relationships over efficiency when they're in tension
- Measuring success by human flourishing, not just business outcomes
- Creating space for the messy, beautiful complexity of being human at work

## The Invitation

The crisis of connection in leadership isn't inevitable. It's a choice we make every day—in how we show up, what we prioritize, and who we're becoming.

The question isn't whether you have time for more human-centered leadership. The question is whether you can afford not to.

*What would change if you led as though people's humanity mattered more than their productivity?*
    `
  },
  {
    id: 2,
    title: "Why Your Strategy Will Fail Without Stories",
    excerpt: "The hidden mechanism that makes some strategies soar while others die in implementation—and it has nothing to do with planning.",
    category: "Storytelling",
    readTime: "6 min",
    date: "2025-11-28",
    content: `
# Why Your Strategy Will Fail Without Stories

Every organization has a strategy. Most fail to execute it. The common explanation? Poor planning, lack of resources, resistance to change.

But there's a deeper reason strategies fail that has nothing to do with the quality of your planning: **People don't move for spreadsheets. They move for stories.**

## The Strategy Execution Gap

Research shows that 67% of well-formulated strategies fail due to poor execution. But this statistic masks a more fundamental truth: strategies don't fail because people don't understand them—they fail because people don't *feel* them.

When you present a strategy through data, frameworks, and logical arguments, you're appealing to the rational brain. But human beings don't make decisions rationally—we make them emotionally, then justify them rationally.

## The Power of Narrative

Story isn't a nice-to-have for communication. Story is how human beings process information, make meaning, and decide what to care about.

When you wrap strategy in narrative, something shifts:
- Abstract goals become concrete and personal
- Change feels like adventure rather than threat
- People see themselves as protagonists, not pawns
- Momentum builds organically rather than being forced

## What This Looks Like

Instead of: *"We need to increase customer satisfaction scores by 15% through improved service delivery."*

Try: *"Remember the email from that customer last month? The one who said our service made them feel invisible? That's the last time anyone should feel that way. Here's how we make sure it never happens again..."*

The difference? One is a metric. The other is a mission.

## The Umunthu Approach to Strategy

In the Umunthu worldview, strategy isn't something you impose—it's something you co-create through shared narrative.

This means:
- Inviting people into the story before you finalize the strategy
- Using stories from the ground to shape direction at the top
- Celebrating the small narrative victories that signal change is happening
- Recognizing that every person in your organization is both listener and storyteller

## Your Turn

Before your next strategy session, ask: What's the story we're telling? Not the strategy deck—the actual story. The one that will spread organically, that will be retold around watercoolers and Zoom calls.

If you can't articulate that story, your strategy is already at risk.

*What story is your strategy asking people to live into?*
    `
  },
  {
    id: 3,
    title: "Systems Change Starts With One Question",
    excerpt: "The deceptively simple question that separates genuine transformation from performative change—and why most leaders never ask it.",
    category: "Systems",
    readTime: "7 min",
    date: "2025-10-10",
    content: `
# Systems Change Starts With One Question

We love the idea of systems change. The language is everywhere: "transforming systems," "systemic solutions," "addressing root causes."

But most of what passes for systems change is just tinkering at the edges—improving efficiency, optimizing processes, adding new programs. Real systems change requires asking a question most leaders find uncomfortable:

**Who does this system serve—and who does it harm?**

## The Uncomfortable Truth

Every system—organizational, social, economic—was designed by someone, for someone. And that design encodes certain values, priorities, and power dynamics, whether we acknowledge them or not.

When we try to "fix" systems without examining these foundational questions, we end up making broken systems more efficient. We optimize extraction. We scale inequality. We perfect the machine without questioning what it's built to do.

## Why We Avoid the Question

Asking who systems serve is uncomfortable because:
- It forces us to acknowledge complicity
- It reveals that success for some requires failure for others
- It challenges the myth of meritocracy and neutral design
- It demands that we imagine alternatives that threaten current power structures

So instead, we focus on symptoms. We create programs instead of changing policies. We celebrate incremental improvements while avoiding structural transformation.

## The Umunthu Framework

The philosophy of Umunthu offers a radical alternative framework for systems change:

*A system is only healthy if it enables the flourishing of all participants, not just some.*

This isn't naive idealism—it's practical wisdom. When systems extract value from some to benefit others, they become brittle, unstable, and ultimately unsustainable.

## What Real Systems Change Requires

Genuine transformation means:
- Centering the voices of those most harmed by current systems
- Redistributing power, not just resources
- Changing the rules of the game, not just who wins under current rules
- Building new systems that embody different values from the ground up

It means being willing to dismantle what we've built—even when we benefit from it—if it can't be reformed to serve all.

## An Invitation to Discomfort

The next time you're in a conversation about "systems change," pause and ask:

*Who does this system serve? Who does it harm? And are we willing to fundamentally redesign it if the answer is uncomfortable?*

If you're not willing to ask and act on these questions, you're not doing systems change. You're just making broken systems more efficient.

*What would you design differently if you started from Umunthu?*
    `
  }
];

export default function Article() {
  // Get article ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = parseInt(urlParams.get('id'));
  
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-stone-900">Article not found</h1>
          <Link to={createPageUrl("Writing")}>
            <Button className="mt-6 bg-stone-900 hover:bg-stone-800">
              Back to Writing
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link to={createPageUrl("Writing")}>
            <Button variant="ghost" className="mb-8 -ml-4 text-stone-600 hover:text-stone-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Writing
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 mb-6">
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {article.category}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} read
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight">
              {article.title}
            </h1>

            <p className="mt-6 text-xl text-stone-600 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-8 pt-8 border-t border-stone-200">
              <SocialShare title={article.title} url={currentUrl} />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 prose prose-lg prose-stone max-w-none
              prose-headings:font-serif prose-headings:text-stone-900
              prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:leading-relaxed prose-p:text-stone-700
              prose-strong:text-stone-900 prose-strong:font-semibold
              prose-em:text-stone-800
              prose-a:text-[#2D5A3D] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content.trim().split('\n').map(line => {
              if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`;
              if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
              if (line.startsWith('**') && line.endsWith('**')) return `<p><strong>${line.slice(2, -2)}</strong></p>`;
              if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) return `<p><em>${line.slice(1, -1)}</em></p>`;
              if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`;
              return line ? `<p>${line}</p>` : '<br />';
            }).join('') }}
          />

          {/* Share Again at Bottom */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <SocialShare title={article.title} url={currentUrl} />
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-16 bg-stone-100/50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-stone-900">
              Enjoyed this piece?
            </h3>
            <p className="mt-3 text-stone-600">
              Subscribe to receive new writing directly in your inbox.
            </p>
            <div className="mt-6 max-w-md mx-auto">
              <NewsletterSignup variant="light" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}